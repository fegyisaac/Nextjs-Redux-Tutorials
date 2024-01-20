"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FormValue } from "@/components/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z
  .object({
    firstname: z.string().min(1, "firstname is required"),
    surname: z.string().min(1, "surname is required"),
    username: z
      .string()
      .min(4, "username must contain at least 4 chars")
      .max(12, "username must contain at most 12 chars")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "The username must contain only letters, numbers and underscore (_)"
      ),
    email: z.string().email({ message: "Invalid Email ID" }),
    password: z.string().min(8, "minimum of 8 character(s)"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type formFields = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const { register, control, handleSubmit, formState } = useForm<formFields>({
    resolver: zodResolver(signUpSchema),
  });
  const { errors } = formState;

  const onSubmit: SubmitHandler<formFields> = (data) => {
    console.log("submitted", data);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-blue-400 border-4 border-green-500 w-[850px] grid place-items-center min-h-[450px]">
        <div className="w-[490px] mx-auto px-5">
          <h2 className="text-3xl mb-4">SignUp</h2>
          <p className="mb-4">Create your account.</p>
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-5 w-full">
              {/* ==================== */}
              <div>
                <input
                  type="text"
                  {...register("firstname")}
                  placeholder="Firstname"
                  className="border border-gray-500 py-1 px-2 rounded-md"
                />
                <p className="text-red-500 font-medium text-[13px]">
                  {errors.firstname?.message}
                </p>
              </div>
              <div>
                <input
                  type="text"
                  {...register("surname")}
                  placeholder="Surname"
                  className="border border-gray-500 py-1 px-2 rounded-md"
                />
                <p className="text-red-500 font-medium text-[13px]">
                  {errors.surname?.message}
                </p>
              </div>
            </div>
            {/* ========================== */}

            <input
              type="text"
              {...register("username")}
              placeholder="Username"
              className="border border-gray-500 mt-5 py-1 px-2 w-full rounded-md"
            />
            <p className="text-red-500 font-medium text-[13px]">
              {errors.username?.message}
            </p>

            <input
              type="text"
              {...register("email")}
              placeholder="Email"
              className="border border-gray-500 mt-5 py-1 px-2 w-full rounded-md"
            />
            <p className="text-red-500 font-medium text-[13px]">
              {errors.email?.message}
            </p>

            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="border border-gray-500 mt-5 py-1 px-2 w-full rounded-md"
            />
            <p className="text-red-500 font-medium text-[13px]">
              {errors.password?.message}
            </p>

            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirm Password"
              className="border border-gray-500 mt-5 py-1 px-2 w-full rounded-md"
            />
            <p className="text-red-500 font-medium text-[13px]">
              {errors.confirmPassword?.message}
            </p>

            <div className="mt-5">
              <button className="w-full bg-purple-500 py-3 text-center text-white">
                SIGN UP
              </button>
            </div>
            <h4 className="text-[12px] text-right mt-6">
              Already signed up?
              <Link href={"/login"}>
                <span className="underline"> login</span>
              </Link>
            </h4>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
