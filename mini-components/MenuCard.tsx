"use client";
import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import Ratings from "./Ratings";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MenuCard = () => {
  const navigator = useRouter();
  return (
    <div className='w-full mx-auto shadow-main  p-4 rounded-lg shadow-main-purple/30'>
      <div className='relative w-full h-52 mb-4'>
        <Image
          src={"/assets/menu.jpg"}
          alt='Menu'
          fill
          className='object-cover rounded-md'
        />
      </div>
      <button
        onClick={() => {
          navigator.push("/menu/787");
        }}
        className='capitalize underline text-sm cursor-pointer'
      >
        View details
      </button>
      <div className='flex items-center justify-between gap-2 my-3 mb-4'>
        <Ratings ratings={3.5} />
        <p className='text-xl font-semibold m-0'>&#8358;50</p>
      </div>

      <h4 className='text-xl md:text-2xl capitalize font-semibold '>
        creamy choco
      </h4>
      <p className='text-gray-500 my-2 text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
        repellendus!
      </p>

      <button className='cursor-pointer flex items-center gap-2 capitalize justify-end w-full mt-6'>
        <MdAddCircleOutline className='text-2xl text-pink-900' />
        <span className='underline text-sm'>Add to cart</span>
      </button>
    </div>
  );
};

export default MenuCard;
