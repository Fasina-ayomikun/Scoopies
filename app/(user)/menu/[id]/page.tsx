import CartFilled from "@/components/CartFilled";
import Navbar from "@/components/Navbar";
import BackBtn from "@/mini-components/BackBtn";
import CartItem from "@/mini-components/CartItem";
import Subheader from "@/mini-components/Subheader";
import Image from "next/image";
import React from "react";
import { FaChevronLeft, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import {
  MdLineAxis,
  MdOutlineRemoveShoppingCart,
  MdOutlineShoppingCart,
  MdPlusOne,
  MdRemoveShoppingCart,
  MdShoppingCart,
  MdShoppingCartCheckout,
} from "react-icons/md";

const SingleRecipe = () => {
  return (
    <section>
      <Navbar />
      <BackBtn />
      <section className='grid grid-cols-1  gap-9 md:grid-cols-2 w-11/12 mx-auto max-w-6xl mt-10'>
        <section className='flex  flex-col gap-6'>
          <div className='relative w-full min-h-92'>
            <Image
              src={"/assets/seo/recipe2.webp"}
              alt='recipe'
              sizes='100vw'
              fill
              className='object-cover rounded-lg'
            />
          </div>
          <div>
            <p className='mb-3 capitalize'>Other flavors:</p>
            <div className='grid grid-cols-3 items-center gap-4 justify-between '>
              <Image
                src={"/assets/seo/recipe1.webp"}
                alt='recipe'
                width={200}
                height={200}
                className='object-cover rounded-md w-full aspect-square '
              />
              <Image
                src={"/assets/seo/recipe2.webp"}
                alt='recipe'
                width={200}
                height={200}
                className='object-cover rounded-md w-full aspect-square'
              />
              <Image
                src={"/assets/seo/recipe2.webp"}
                alt='recipe'
                width={200}
                height={200}
                className='object-cover rounded-md w-full aspect-square'
              />
            </div>
          </div>
        </section>
        <section>
          <h3 className='font-semibold md:text-2xl text-lg mb-2'>
            Creamy Chocolate
          </h3>
          <p className='text-sm text-gray-600 mb-8'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
            impedit ad dolor corporis accusantium inventore ipsum illo, quis
            expedita laboriosam quae. Architecto sequi corporis incidunt
            voluptate, itaque amet iusto similique.
          </p>
          <ul className='list-disc list-inside list'>
            <li className='list-none font-medium mb-2'>Ingredients:</li>
            <li className='px-5 my-1'>Chocolate</li>
            <li className='px-5 my-1'>Chocolate</li>
            <li className='px-5 my-1'>Chocolate</li>
            <li className='px-5 my-1'>Chocolate</li>
          </ul>
          <button className='md:w-full capitalize flex justify-center btn bg-main-purple w-32 text-white mx-auto my-7'>
            order now
          </button>
        </section>
      </section>
    </section>
  );
};

export default SingleRecipe;
