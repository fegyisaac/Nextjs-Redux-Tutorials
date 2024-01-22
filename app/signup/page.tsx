"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FormValue } from "@/components/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z
  .object({
    firstname: z
      .string()
      .min(1, "Minimum 3 and maximum 64 characters are allowed in username."),
    surname: z.string().min(1, "surname is required"),
    username: z
      .string()
      .min(4, "username must contain at least 4 character(s)")
      .max(12, "username must contain at most 12 character(s)")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "The username must contain only letters, numbers and underscore (_)"
      ),
    email: z.string().email({
      message: "Please enter a valid email address, like: yourname@email.com",
    }),
    password: z.string().min(8, "Use a password that is at least 8 characters"),
    // .regex(
    //   // '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
    //   "user" – it helps keep your account secure.
    // ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type formFields = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const { register, control, handleSubmit, formState, reset } =
    useForm<formFields>({
      resolver: zodResolver(signUpSchema),
    });
  const { errors } = formState;

  const onSubmit: SubmitHandler<formFields> = async (data) => {
    console.log("submitted", data);

    const firstname = data.firstname;
    const surname = data.surname;
    const username = data.username;
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    try {
      const res = await fetch("api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          surname,
          username,
          email,
          password,
          confirmPassword,
        }),
      });

      if (res.ok) {
        reset();
      } else {
        console.log("user faile");
      }
    } catch (error) {
      console.log("failed");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-blue-400 border-4 border-green-500 w-[850px] grid place-items-center min-h-[450px]">
        <div className="w-[490px] mx-auto px-5">
          <h2 className="text-3xl mb-4">SignUp</h2>
          <p className="mb-4">Create your account.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center gap-2 w-full">
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
