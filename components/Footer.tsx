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
        <div className='flex items-center justify-between gap-3 py-4 mb-6'>
          <Image
            src='/assets/logo-white.png'
            width={100}
            height={100}
            alt='Scoopies'
            className={`w-24 md:w-24 `}
          />
          <div className='flex items-center  gap-3 text-white text-2xl'>
            <MdWhatsapp />
            <MdFacebook />
          </div>
        </div>
        <h4 className='capitalize text-white font-semibold text-2xl'>
          Subscribe to newsletter
        </h4>
        <p className='text-gray-300 my-1 mb-3'>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <input
          type={"email"}
          placeholder='Enter your email'
          className='bg-white/5 capitalize my-4 text-white placeholder:text-white border border-gray-300  text-sm    rounded-md px-4 py-4 w-full h-full outline-white/50  focus:outline-1 tracking-wide'
        />

        <div className='grid grid-cols-1 gap-5 mt-8 md:grid-cols-2'>
          <ul className='mx-auto text-white'>
            <li className='text-xl font-semibold text-center capitalize mb-4'>
              Contact us
            </li>
            <li className='flex items-center gap-1 mb-4 justify-center'>
              <MdLocationOn className='text-2xl' /> No 23, landmark center
            </li>
            <li className='flex items-center gap-2 mb-4 justify-center'>
              <FaEnvelope className='text-xl' /> scoopies@gmail.com
            </li>
            <li className='flex items-center gap-2 mb-4 justify-center'>
              <MdPhone className='text-2xl' /> +23456 867 5632
            </li>
          </ul>
          <ul className='mx-auto text-white'>
            <li className='text-xl font-semibold text-center capitalize mb-4'>
              Links
            </li>
            <li className='flex items-center gap-1 mb-4 justify-center'>
              <Link href={"/"}>Home</Link>
            </li>
            <li className='flex items-center gap-1 mb-4 justify-center'>
              <Link href={"/"}>About</Link>
            </li>
            <li className='flex items-center gap-1 mb-4 justify-center'>
              <Link href={"/"}>Menu</Link>
            </li>
            <li className='flex items-center gap-1 mb-4 justify-center'>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <p className='text-center py-2 mt-5 text-white capitalize'>
          Copyright &copy; {new Date().getFullYear()}. all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
