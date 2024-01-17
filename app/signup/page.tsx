"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const SignUp = () => {
  const { register, control, handleSubmit, formState } = useForm<FormValue>();
  const { errors } = formState;

  type FormValue = {
    firstname: string;
    surname: string;
    username: string;
    email: string;
    password: any;
    "confirm password": any;
  };

  const onSubmit = (data: FormValue) => {
    console.log("submitted", data);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-blue-400 border-4 border-green-500 w-[850px] grid place-items-center min-h-[450px]">
        <div className="w-[490px] mx-auto px-5">
          <h2 className="text-3xl mb-4">SignUp</h2>
          <p className="mb-4">Create your account.</p>
          <form action="#" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-2 gap-5">
              {/* ==================== */}
              <div>
                <input
                  type="text"
                  {...register("firstname", {
                    required: {
                      value: true,
                      message: "firstname is required",
                    },
                  })}
                  placeholder="firstname"
                  className="border border-gray-500 py-1 px-2 rounded-md"
                />
                <p className="text-red-500 font-medium text-[13px]">
                  {errors.firstname?.message}
                </p>
              </div>

              <input
                type="text"
                {...register("surname")}
                placeholder="Surname"
                className="border border-gray-500 py-1 px-2 rounded-md"
              />
            </div>
            {/* ========================== */}
            <input
              type="text"
              {...register("username", {
                required: "username is required",
              })}
              placeholder="Username"
              className="border border-gray-500 mt-5 py-1 px-2 w-full rounded-md"
            />
            <p className="text-red-500 font-medium text-[13px]">
              {errors.username?.message}
            </p>
            <input
              type="text"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
                },
                validate: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "Enter a different email address"
                  );
                },
              })}
              placeholder="Email"
              className="border border-gray-500 mt-5 py-1 px-2 w-full rounded-md"
            />
            <p className="text-red-500 font-medium text-[13px]">
              {errors.email?.message}
            </p>

            <input
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "password field can't be empty",
                },
              })}
              placeholder="Password"
              className="border border-gray-500 mt-5 py-1 px-2 w-full rounded-md"
            />
            <p className="text-red-500 font-medium text-[13px]">
              {errors.password?.message}
            </p>

            <input
              type="password"
              {...register("confirm password", {
                required: "confirm password field can't be empty",
              })}
              placeholder="Confirm Password"
              className="border border-gray-500 mt-5 py-1 px-2 w-full rounded-md"
            />
            <p className="text-red-500 font-medium text-[13px]">
              {errors["confirm password"]?.message}
            </p>

            <div className="mt-5">
              <button className="w-full bg-purple-500 py-3 text-center text-white">
                SIGN UP
              </button>
            </div>
            <h4 className="text-[12px] text-right mt-6">
              Already signed up?
              <Link href={"/login"}>
                <span className="underline">login</span>
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
