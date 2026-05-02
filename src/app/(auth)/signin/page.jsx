"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { toast } from "react-toastify";
import { authClient } from "../../../lib/auth-client";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFunc = async (data) => {
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4 ">
      <div className="bg-white w-full max-w-md px-6 py-8 rounded-xl shadow-md">
        <h1 className="text-center font-bold text-3xl">
          Login to your account
        </h1>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Email Address</legend>
            <input
              type="email"
              {...register("email", { required: "email field is required" })}
              className="input bg-slate-100 w-full"
              placeholder="Type your email address"
            />

            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend text-lg ">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              {...register("password", {
                required: "password field is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className="input bg-slate-100 w-full"
              placeholder="Type your password"
            />
            <span
              className="cursor-pointer absolute top-4 right-2 p-1"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? (
                <FaEye className="w-5" />
              ) : (
                <FaEyeSlash className="w-5" />
              )}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button
            type="submit"
            className="btn w-full bg-slate-800 text-white mt-5 rounded-md"
          >
            Login
          </button>
        </form>
        <p className="mt-5">
          Don&apos;t have an account?{" "}
          <Link href={"/signup"} className="text-red-500">
            Register Now
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          type="button"
          className="btn btn-outline border-blue-200 w-full flex gap-3 justify-center items-center mb-2 mt-2 rounded-lg hover:bg-slate-50 transition"
          onClick={handleGoogleSignin}
        >
          <FaGoogle className="text-red-500 text-lg" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
