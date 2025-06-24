"use client";
import Navbar from "@/components/Navbar";
import Input from "@/mini-components/Input";
import {
  RegisterUserInterface,
  SignInUserInterface,
  UserInterface,
} from "@/utils/functions/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "@/utils/functions/schema";
import {
  signinWithEmail,
  signinWithGoogle,
  signupWithEmail,
} from "@/utils/functions/functions";
import { useContextProvider } from "@/utils/context/authContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const SignIn = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContextProvider();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInUserInterface>({ resolver: yupResolver(loginSchema) });
  const navigate = useRouter();
  const formSubmitHandler: SubmitHandler<SignInUserInterface> = async (
    data
  ) => {
    setIsLoading(true);
    try {
      console.log("====================================");
      console.log(data, errors);
      console.log("====================================");
      const response = await axios.post(
        "/api/auth/login",
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        const user = response.data.user;
        if (window) {
          window.localStorage.setItem(
            "SCOOPIES_CURRENT_USER",
            JSON.stringify({ name: user.name, email: user.email })
          );
        }
        setUser(user as UserInterface);
        navigate.push("/");
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      if (axios.isAxiosError(error)) {
        toast.warn(String(error));
      }
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (window) {
      setScreenWidth(window.screen.width);
    }
  }, []);
  return (
    <section className='form-background pb-15 min-h-screen w-full '>
      <Navbar showToggle={false} white={screenWidth >= 768} />
      <section className='   min-h-[110vh] w-full'>
        <section className='bg-white   rounded-md md:shadow-xl  max-w-2xl mx-auto px-10 py-8 md:w-md w-full my-4'>
          <h2 className='text-main-purple text-3xl text-center font-semibold font-lora'>
            Welcome to Scoopies
          </h2>
          <p className='text-gray-500 text-center text-sm my-2'>
            Lorem ipsum dolor sit amet.{" "}
          </p>
          <form
            className='mt-10'
            onSubmit={handleSubmit(formSubmitHandler, (errors) => {
              console.log("====================================");
              console.log(errors);
              console.log("====================================");
            })}
          >
            <Input
              error={errors?.email?.message}
              type='email'
              label='Email'
              required
              placeholder='Enter Your Email'
              {...register("email")}
            />
            <Input
              type='password'
              label='Password'
              error={errors?.password?.message}
              required
              placeholder='Enter A Password'
              {...register("password")}
              showForgot={true}
            />

            <button
              type='submit'
              disabled={isLoading}
              className='btn bg-pink-900 text-white w-full capitalize'
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
            <div className='w-full px-10 flex items-center gap-4  my-5'>
              <hr className='bg-gray-300 h-[1px] rounded-2xl w-full' />

              <span className='text-gray-500 text-center uppercase'>OR</span>
              <hr className='bg-gray-300 h-[1px] rounded-2xl w-full' />
            </div>
            <button
              onClick={() => {
                signinWithGoogle();
                let user: string | UserInterface | null =
                  window.localStorage.getItem("SCOOPIES_CURRENT_USER");
                user = user ? JSON.parse(user) : null;
                if (user) {
                  setUser(user as UserInterface);

                  navigate.push("/");
                }
              }}
              type='button'
              className='btn text-red-600 border--pink-900 bg-transparent border w-full '
            >
              Sign in with Google
            </button>
            <p className='text-sm text-center my-4 mt-7 text-gray-700'>
              Don't have an account??{" "}
              <Link
                href={"/signup"}
                className='text-main-purple underline underline-offset-1'
              >
                Sign up
              </Link>
            </p>
          </form>
        </section>
      </section>
    </section>
  );
};

export default SignIn;
