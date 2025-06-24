"use client";
import Hero from "@/components/Hero";
import Input from "@/mini-components/Input";
import Subheader from "@/mini-components/Subheader";
import { messageSchema } from "@/utils/functions/schema";
import { Direction, sendMessageInterface } from "@/utils/functions/types";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<sendMessageInterface>({ resolver: yupResolver(messageSchema) });
  const formSubmitHandler: SubmitHandler<sendMessageInterface> = async (
    data
  ) => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  };

  return (
    <section>
      <Hero
        text={["Have Something to Tell", "Us?"]}
        desc='Lremuwei rwro owriwo r'
        bgImg='bg-[url(/assets/seo/contact.webp)]'
      />
      <section className='py-10 md:h-screen px-3'>
        <Subheader text='Contact Us' showArrow={false} />
        <form
          className='mt-10 w-11/12 mx-auto max-w-2xl'
          onSubmit={handleSubmit(formSubmitHandler, (errors) => {
            console.log("====================================");
            console.log(errors);
            console.log("====================================");
          })}
        >
          <Input
            error={errors?.name?.message}
            type='name'
            label='Name'
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
            type='message'
            label='Message'
            textarea={true}
            error={errors?.message?.message}
            required
            placeholder='What Would You Like To Tell Us?'
            {...register("message")}
          />

          <button
            type='submit'
            className='btn bg-pink-900 text-white w-full capitalize'
          >
            Send Message
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
