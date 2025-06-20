"use client";
import React from "react";
import Navbar from "./Navbar";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Hero = ({
  text,
  navlink = "/menu",
  bgImg = "home",
  desc,
}: {
  text: string[];
  navlink?: string;
  desc: string;
  bgImg?: string;
}) => {
  const navigate = useRouter();
  return (
    <section
      className={`relative z-10 h-screen  text-white  bg-no-repeat bg-center bg-cover ${bgImg}`}
    >
      <Navbar white={true} />
      <div className=' -z-10 absolute top-0 left-0 bottom-0 right-0 bg-linear-to-b  from-black/60  to-black/60'></div>

      <div className=' z-10  h-[calc(100vh-6rem)] flex flex-col items-center justify-center'>
        <h1 className='text-center md:text-4xl text-3xl font-lora font-semibold mb-2'>
          {text[0]} <br /> {text[1]}
        </h1>
        <p className='text-center text-md mb-8'>{desc}</p>
        <button
          onClick={() => {
            navigate.push(navlink);
          }}
          className='btn flex items-center gap-2 bg-main-purple text-white px-5 justify-center mx-auto w-1/5 max-w-32'
        >
          Explore <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Hero;
