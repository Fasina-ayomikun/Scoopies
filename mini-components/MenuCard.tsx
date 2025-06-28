"use client";
import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import Ratings from "./Ratings";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useModalProvider } from "@/utils/context/modalContext";
import {
  iceCreamFullInterface,
  iceCreamInterface,
} from "@/utils/functions/types";

const MenuCard = ({ product }: { product: iceCreamFullInterface }) => {
  const navigator = useRouter();
  const pathname = usePathname();

  return (
    <div className='w-full mx-auto shadow-main  p-4 rounded-lg shadow-main-purple/30'>
      <div className='relative w-full h-52 mb-4'>
        <Image
          src={
            product.images ? product.images[0].url : "/assets/seo/recipe1.webp"
          }
          alt='Menu'
          fill
          sizes='100vw'
          className='object-cover rounded-md'
        />
      </div>
      <button
        onClick={() => {
          navigator.push(`/menu/${product._id}`);
        }}
        className='capitalize underline text-sm cursor-pointer'
      >
        View details
      </button>
      <div className='flex items-center justify-between gap-2 my-3 mb-4'>
        <Ratings ratings={product.averageRatings} />
        <p className='text-xl font-semibold m-0'>&#8358;{product.price}</p>
      </div>

      <h4 className='text-xl md:text-2xl capitalize font-semibold '>
        {product.name}
      </h4>
      <p className='text-gray-500 my-2 text-sm'>
        {product.desc.substring(0, 100)}...
      </p>

      <button className='cursor-pointer flex items-center gap-2 capitalize justify-end w-full mt-6'>
        <MdAddCircleOutline
          className='text-2xl text-pink-900'
          onClick={() => {
            navigator.push(`${pathname}?id=${product._id}&openAddToCart=true`);
          }}
        />
        <span
          className='underline text-sm'
          onClick={() => {
            navigator.push(`${pathname}?id=${product._id}&openAddToCart=true`);
          }}
        >
          Add to cart
        </span>
      </button>
    </div>
  );
};

export default MenuCard;
