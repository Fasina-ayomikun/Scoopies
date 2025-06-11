"use client";
import Navbar from "@/components/Navbar";
import Input from "@/mini-components/Input";
import { passwordResetEmail } from "@/utils/functions/functions";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  return (
    <section className='form-background pb-15 min-h-screen'>
      <Navbar showToggle={false} />
      <section>
        <section className=' bg-white rounded-md md:shadow-xl  max-w-2xl mx-auto px-10 py-8 w-md my-4'>
          <h2 className='text-main-purple text-3xl text-center font-semibold font-lora'>
            Forgot Password
          </h2>
          <p className='text-gray-500 text-center text-sm my-2'>
            Enter your email address
          </p>
          <form
            className='mt-10'
            onSubmit={(e) => {
              e.preventDefault();
              passwordResetEmail(email);
            }}
          >
            <Input
              type='email'
              label='Email'
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Your Email'
            />
            <button
              type='submit'
              //   disabled={isLoading}
              className='btn bg-pink-900 text-white w-full capitalize'
            >
              Submit
              {/* {isLoading ? "Submitting..." : "Submit"} */}
            </button>
          </form>
        </section>
      </section>
    </section>
  );
};

export default ForgotPassword;
