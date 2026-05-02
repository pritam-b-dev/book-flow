"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSignUpFunc = (data) => {
    const { name, photo, email, password } = data;
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 ">
      <div className="bg-white min-w-md px-3 py-8 my-10">
        <h1 className="text-center font-bold text-3xl">Sign Up Here!</h1>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(handleSignUpFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Name</legend>
            <input
              type="text"
              {...register("name", { required: "Name field is required" })}
              className="input bg-slate-100 w-full"
              placeholder="Type your Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Photo URL</legend>
            <input
              type="url"
              {...register("photo", { required: "Photo field is required" })}
              className="input bg-slate-100 w-full"
              placeholder="enter your photo url"
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>
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
            Sign-Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
