"use client";
import Input from "@/mini-components/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdFacebook, MdLocationOn, MdPhone, MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='bg-main-purple px-6 py-5 mt-10'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-start justify-between gap-3 py-4 mb-6'>
          <Image
            src='/assets/logo-white.png'
            width={100}
            height={100}
            alt='Scoopies'
            className={`w-24 md:w-24 `}
          />
          <div className='flex items-start  gap-3 text-white text-2xl'>
            <MdWhatsapp />
            <MdFacebook />
          </div>
        </div>
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-7 items-start '>
          <form action=''>
            <h4 className='capitalize text-white font-semibold text-2xl'>
              Subscribe to newsletter
            </h4>
            <p className='text-gray-300 my-1 mb-3'>
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <input
              type={"email"}
              placeholder='Enter your email'
              className='bg-white/5 capitalize my-4 text-white placeholder:text-white border border-gray-300  text-sm    rounded-md px-4 py-4 w-full h-fit outline-white/50  focus:outline-1 tracking-wide'
            />
          </form>
          <div className='grid grid-cols-1 gap-2 w-3/5 mx-auto md:w-full   justify-center md:grid-cols-2 items-start'>
            <ul className=' text-white'>
              <li className='text-xl font-semibold text-start capitalize mb-4'>
                Contact us
              </li>
              <li className='flex items-center gap-1 mb-4 justify-start'>
                <MdLocationOn className='text-2xl' /> No 23, landmark center
              </li>
              <li className='flex items-center gap-2 mb-4 justify-start'>
                <FaEnvelope className='text-xl' /> scoopies@gmail.com
              </li>
              <li className='flex items-center gap-2 mb-4 justify-start'>
                <MdPhone className='text-2xl' /> +23456 867 5632
              </li>
            </ul>
            <ul className=' text-white'>
              <li className='text-xl font-semibold text-start capitalize mb-4'>
                Other Links
              </li>
              <li className='flex items-center gap-1 mb-4 justify-start'>
                <Link href={"/"}>Home</Link>
              </li>
              <li className='flex items-center gap-1 mb-4 justify-start'>
                <Link href={"/"}>About</Link>
              </li>
              <li className='flex items-center gap-1 mb-4 justify-start'>
                <Link href={"/"}>Menu</Link>
              </li>
              <li className='flex items-center gap-1 mb-4 justify-start'>
                <Link href={"/"}>Contact</Link>
              </li>
            </ul>
          </div>
        </section>
        <p className='text-center py-2 mt-5 text-white capitalize'>
          Copyright &copy; {new Date().getFullYear()}. all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
