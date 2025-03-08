import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../features/authSlice/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`sm:mx-auto w-full sm:h-auto h-[90vh] max-w-lg bg-[#986c43] sm:rounded-xl rounded-none sm:px-12 px-8 py-10 border border-black/50 shadow-lg shadow-[#986c43]`}
      >
        <h2 className="text-center text-[#fff] text-2xl font-bold leading-normal">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base  text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 underline"
          >
            Sign up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="flex flex-wrap gap-4">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              required
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPattern: (value) =>
                    /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            {/* {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )} */}
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              required
              {...register("password", {
                required: "Password is required",
              })}
            />
            {/* {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )} */}
            <Button
              type="submit"
              style={{ backgroundColor: "#364037" }}
              className={`w-full mt-4 mb-2`}
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
