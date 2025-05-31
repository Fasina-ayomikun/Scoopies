import Navbar from "@/components/Navbar";
import Input from "@/mini-components/Input";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <section>
      <Navbar showToggle={false} />
      <section>
        <section className='max-w-2xl mx-auto px-5 py-4'>
          <h2 className='text-main-purple text-3xl text-center font-semibold font-lora'>
            Welcome to Scoopies
          </h2>
          <p className='text-gray-500 text-center text-sm my-2'>
            Lorem ipsum dolor sit amet.{" "}
          </p>
          <form className='mt-10'>
            <Input
              type='text'
              label='Name'
              required
              placeholder='Enter Your Name'
            />
            <Input
              type='text'
              label='Email'
              required
              placeholder='Enter Your Email'
            />
            <Input
              type='password'
              label='Password'
              required
              placeholder='Enter A Password'
            />
            <Input
              type='password'
              label='Confirm Password'
              required
              placeholder='Confirm Your Password'
            />

            <div className='text-gray-700 my-3 px-2 mb-8 flex items-center gap-2 text-sm'>
              <input type='checkbox' name='terms' id='terms' />
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
              className='btn bg-pink-900 text-white w-full capitalize'
            >
              submit
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
              Sign in with Google
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
