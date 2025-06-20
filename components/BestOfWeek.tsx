import Subheader from "@/mini-components/Subheader";
import { Direction } from "@/utils/functions/types";
import React from "react";
import { MdChevronRight, MdOutlineStar } from "react-icons/md";

const BestOfWeek = () => {
  return (
    <section className='h-full py-10 '>
      <Subheader text='Best of the Week' direction={Direction.left} />
      <section className='mt-10 flex items-center justify-center-safe gap-8 overflow-hidden overflow-x-auto mx-auto px-2 max-w-6xl'>
        <div className='relative px-4 py-5 rounded-xl  min-w-72 w-72 flex flex-col justify-between bg-[url(/assets/menu.jpg)]  h-96 text-white bg-cover bg-center'>
          <div className='rounded-xl absolute top-0 left-0 bottom-0 right-0 bg-linear-to-b  from-black/0  to-black/85 from-0% via-30% to-75%'></div>

          <div className='self-end z-1 bg-main-purple/45  text-lg flex items-center gap-2 px-2 rounded-lg'>
            <MdOutlineStar />
            <span className='margin-0 font-medium'>4.5</span>
          </div>
          <div className='z-1'>
            <h4 className='text-2xl font-lora font-semibold'>Caramel choco</h4>
            <p className='text-pink-100 text-md'>&#8358; 12.00</p>
          </div>
        </div>
        <div className='relative px-4 py-5 rounded-xl min-w-72 w-72 flex flex-col justify-between bg-[url(/assets/menu.jpg)]  h-96 text-white bg-cover bg-center'>
          <div className='rounded-xl absolute top-0 left-0 bottom-0 right-0 bg-linear-to-b  from-black/0  to-black/80 from-0% via-30% to-80%'></div>

          <div className='self-end z-1 bg-main-purple/45  text-lg flex items-center gap-2 px-2 rounded-lg'>
            <MdOutlineStar />
            <span className='margin-0 font-medium'>4.5</span>
          </div>
          <div className='z-1'>
            <h4 className='text-2xl font-lora font-semibold'>Caramel choco</h4>
            <p className='text-pink-100 text-md'>&#8358; 12.00</p>
          </div>
        </div>
        <div className='relative px-4 py-5 rounded-xl min-w-72 w-72 flex flex-col justify-between bg-[url(/assets/menu.jpg)]  h-96 text-white bg-cover bg-center'>
          <div className='rounded-xl absolute top-0 left-0 bottom-0 right-0 bg-linear-to-b  from-black/0  to-black/80 from-0% via-30% to-80%'></div>

          <div className='self-end z-1 bg-main-purple/45  text-lg flex items-center gap-2 px-2 rounded-lg'>
            <MdOutlineStar />
            <span className='margin-0 font-medium'>4.5</span>
          </div>
          <div className='z-1'>
            <h4 className='text-2xl font-lora font-semibold'>Caramel choco</h4>
            <p className='text-pink-100 text-md'>&#8358; 12.00</p>
          </div>
        </div>
      </section>
      <div className='hidden  md:flex items-center justify-center mx-auto gap-2 mt-4'>
        <button className='bg-main-purple w-2 aspect-square rounded-full'></button>
        <button className='bg-gray-400 w-2 aspect-square rounded-full'></button>
        <button className='bg-gray-400 w-2 aspect-square rounded-full'></button>
      </div>
    </section>
  );
};

export default BestOfWeek;
