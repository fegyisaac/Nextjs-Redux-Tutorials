"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const logInSchema = z.object({
  email: z.string().email({ message: "Invalid Email ID" }),
  password: z.string().min(8, "minimum of 8 character(s)"),
});

type formFields = z.infer<typeof logInSchema>;

const LogIn = () => {
  const { register, control, handleSubmit, formState } = useForm<formFields>({
    resolver: zodResolver(logInSchema),
  });
  const { errors } = formState;

  const onSubmit: SubmitHandler<formFields> = (data) => {
    console.log("submitted", data);
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-blue-400 border-4 border-green-500 w-[850px] grid place-items-center min-h-[450px]">
        <div className="w-[490px] mx-auto px-5">
          <h2 className="text-3xl mb-4">Log into your account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
              <input
                type="text"
                {...register("email")}
                placeholder="Email"
                className="border border-gray-500 py-1 px-2 w-full rounded-md"
              />
              <p className="text-red-500 mt-1 font-medium text-[13px]">
                {errors.email?.message}
              </p>
            </div>
            <div className="mt-5">
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                className="border border-gray-500 py-1 px-2 w-full rounded-md"
              />
              <p className="text-red-500 mt-1 font-medium text-[13px]">
                {errors.password?.message}
              </p>
            </div>
          

            <button className="w-full bg-purple-500 mt-5 py-3 text-center text-white">
              LOG IN
            </button>
            <h4 className="text-[12px] text-right mt-6">
              Don't have an account?
              <Link href={"/signup"}>
                <span className="underline"> Sign Up</span>
              </Link>
            </h4>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
