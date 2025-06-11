import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import Ratings from "./Ratings";
import Image from "next/image";

const MenuCard = () => {
  return (
    <div className='w-4/5 mx-auto shadow-md  p-4 rounded-lg shadow-gray-500'>
      <div className='relative w-full h-52 mb-4'>
        <Image
          src={"/assets/menu.jpg"}
          alt='Menu'
          fill
          className='object-cover rounded-md'
        />
      </div>
      <button className='capitalize underline'>View details</button>
      <div className='flex items-center justify-between gap-2 my-3'>
        <Ratings ratings={3.5} />
        <p className='text-2xl font-semibold m-0'>&#8358;50</p>
      </div>

      <h4 className='text-2xl capitalize font-semibold '>creamy choco</h4>
      <p className='text-gray-500 my-2'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
        repellendus!
      </p>

      <button className='flex items-center gap-2 capitalize justify-end w-full'>
        <MdAddCircleOutline className='text-2xl text-pink-900' />
        <span className='underline'>Add to cart</span>
      </button>
    </div>
  );
};

export default MenuCard;
