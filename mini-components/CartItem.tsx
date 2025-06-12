import Image from "next/image";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartItem = () => {
  return (
    <div className='grid grid-cols-3 items-center gap-4 w-11/12 mx-auto rounded-lg py-4 px-2 border-b border-pink-400'>
      <div className='col-span-1 relative w-full rounded-lg aspect-square'>
        <Image
          src={"/assets/seo/recipe1.webp"}
          alt='ice cream'
          fill
          sizes='100vw'
          className='object-cover rounded-lg'
        />
      </div>
      <div className='col-span-2'>
        <h4 className='capitalize text-lg mb-1 font-semibold'>
          Creamy Chocolate
        </h4>
        <p className='text-gray-600  text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className='flex items-center justify-between gap-2 mt-2'>
          <p className='flex items-center gap-4 text-pink-900'>
            <FaMinus /> <span className='text-xl text-gray-800'>1</span>
            <FaPlus />
          </p>
          <p className='text-xl font-semibold'>&#8358;50</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
