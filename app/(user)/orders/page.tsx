"use client";
import Navbar from "@/components/Navbar";
import BackBtn from "@/mini-components/BackBtn";
import Filter from "@/mini-components/Filter";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { MdCheck } from "react-icons/md";

const OrdersPage = () => {
  const [filter, setFilter] = useState("");
  return (
    <section>
      <Navbar />
      <BackBtn />
      <h4 className='text-center capitalize font-lora font-semibold text-3xl text-main-purple  mb-1'>
        your orders
      </h4>
      <p className='text-center mb-6 text-gray-600 text-sm'>
        Track your orders here
      </p>

      <Filter filters={["active", "completed"]} setFilter={setFilter} />

      <section className='grid grid-cols-1  md:grid-cols-2 max-w-6xl gap-5 w-11/12 mx-auto my-10'>
        <div className='w-full '>
          <div className='flex   shadow-main    shadow-main-purple/30 items-center  gap-4 w-full   rounded-lg p-3 '>
            <div className=' w-48 md:w-25  relative rounded-lg aspect-square'>
              <Image
                src={"/assets/seo/recipe1.webp"}
                alt='ice cream'
                fill
                sizes='100vw'
                className='object-cover rounded-lg'
              />
            </div>
            <div className='flex flex-col items-start'>
              <h4 className='capitalize text-lg mb-1 font-semibold'>
                Creamy Chocolate
              </h4>
              <p className='text-gray-600  text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='flex w-full items-center justify-between gap-2 mt-3'>
                <p className='text-xl font-semibold '>&#8358;50</p>
                <button className='capitalize btn bg-main-purple w-32 text-white'>
                  track order
                </button>
              </div>
            </div>
          </div>
          <p className='text-sm text-end text-gray-600 capitalize my-2'>
            Today, May 12, 2025
          </p>
        </div>

        <div className='w-full'>
          <div className='flex   shadow-main    shadow-main-purple/30 items-center  gap-4 w-full   rounded-lg p-3 '>
            <div className=' w-48 md:w-25  relative rounded-lg aspect-square'>
              <Image
                src={"/assets/seo/recipe1.webp"}
                alt='ice cream'
                fill
                sizes='100vw'
                className='object-cover rounded-lg'
              />
            </div>
            <div className='flex flex-col items-start'>
              <h4 className='capitalize text-lg mb-1 font-semibold'>
                Creamy Chocolate
              </h4>
              <p className='text-gray-600  text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='flex w-full items-center justify-between gap-2 mt-3'>
                <p className='text-xl font-semibold '>&#8358;50</p>
                <button className='capitalize btn bg-main-purple w-32 text-white'>
                  track order
                </button>
              </div>
            </div>
          </div>
          <p className='text-sm text-end text-gray-600 capitalize my-2'>
            Today, May 12, 2025
          </p>
        </div>
      </section>
      <button className='my-8 mx-auto flex items-center w-36 justify-center gap-2 btn border border-pink-900 text-pink-900 bg-transparent capitalize'>
        see more
      </button>
    </section>
  );
};

export default OrdersPage;
