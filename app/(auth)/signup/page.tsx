"use client";
import Navbar from "@/components/Navbar";
import Input from "@/mini-components/Input";
import { RegisterUserInterface, UserInterface } from "@/utils/functions/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/utils/functions/schema";
import { signinWithGoogle, signupWithEmail } from "@/utils/functions/functions";
import { useContextProvider } from "@/utils/context/authContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [termsCheck, setTermsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContextProvider();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterUserInterface>({ resolver: yupResolver(registerSchema) });
  const navigate = useRouter();
  const formSubmitHandler: SubmitHandler<RegisterUserInterface> = async (
    data
  ) => {
    setIsLoading(true);
    try {
      console.log("====================================");
      console.log(data, errors);
      console.log("====================================");
      if (termsCheck && data.password === data.confirmPassword) {
        const response = await axios.post(
          "/api/auth/register",
          {
            name: data.name,
            email: data.email,
            password: data.password,
            loggedInWithPassword: true,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        if (response.status === 201) {
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
      }
    } catch (error) {
      console.log("====================================");
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.warn(error.message);
      }
      console.log("====================================");
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
    <section className='form-background pb-15 min-h-screen'>
      <Navbar showToggle={false} white={screenWidth >= 768} />
      <section>
        <section className=' bg-white rounded-md md:shadow-xl  max-w-2xl mx-auto px-10 py-8 w-md my-4'>
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
              type='text'
              label='Name'
              error={errors?.name?.message}
              required
              placeholder='Enter Your Name'
              {...register("name")}
            />
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
            />
            <Input
              type='password'
              error={errors?.confirmPassword?.message}
              label='Confirm Password'
              required
              placeholder='Confirm Your Password'
              {...register("confirmPassword")}
            />

            <div className='text-gray-700 my-3 px-2 mb-8 flex items-center gap-2 text-sm'>
              <input
                type='checkbox'
                name='terms'
                id='terms'
                required
                checked={termsCheck}
                onChange={(e) => {
                  setTermsCheck((prev) => !prev);
                }}
              />
              <label htmlFor='terms'>
                I agree to the{" "}
                <a href='/terms' className='text-main-purple underline'>
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href='/privacy' className='text-main-purple underline'>
                  Privacy Policy
                </a>
              </label>
            </div>
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
              type='button'
              className='btn text-red-600 border--pink-900 bg-transparent border w-full '
            >
              Sign up with Google
            </button>
            <p className='text-sm text-center my-4 mt-7 text-gray-700'>
              Already have an account??{" "}
              <Link
                href={"/signin"}
                className='text-main-purple underline underline-offset-1'
              >
                Sign in
              </Link>
            </p>
          </form>
        </section>
      </section>
    </section>
  );
};

export default SignUp;
