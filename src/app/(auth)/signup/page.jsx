"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { authClient } from "../../../lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegFunc = async (data) => {
    const { name, photo, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      fetchOptions: {
        headers: {
          "x-dont-remember-me": "true",
        },
      },
    });
    if (error) {
      toast.error(error.message);
    }
    if (res) {
      await authClient.signOut();
      router.push("/signin");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4 ">
      <div className="bg-white w-full max-w-md px-6 py-8 rounded-xl shadow-md">
        <h1 className="text-center font-bold text-3xl">User Registration</h1>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(handleRegFunc)}>
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
