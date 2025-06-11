import Subheader from "@/mini-components/Subheader";
import { Direction } from "@/utils/functions/types";
import React from "react";
import { MdChevronRight, MdOutlineStar } from "react-icons/md";

const BestOfWeek = () => {
  return (
    <section className='h-full py-10 px-2'>
      <Subheader text='Best of the Week' direction={Direction.left} />
      <section className='flex items-center justify-center-safe gap-8 overflow-hidden overflow-x-scroll mx-auto'>
        <div className='relative px-4 py-5 rounded-xl  min-w-72 w-72 flex flex-col justify-between bg-[url(/assets/menu.jpg)]  h-96 text-white bg-cover bg-center'>
          <div className='rounded-xl absolute top-0 left-0 bottom-0 right-0 bg-linear-to-b  from-black/0  to-black/85 from-0% via-30% to-75%'></div>

          <div className='self-end z-10 bg-main-purple/45  text-lg flex items-center gap-2 px-2 rounded-lg'>
            <MdOutlineStar />
            <span className='margin-0 font-medium'>4.5</span>
          </div>
          <div className='z-10'>
            <h4 className='text-2xl font-lora font-semibold'>Caramel choco</h4>
            <p className='text-pink-100 text-md'>&#8358; 12.00</p>
          </div>
        </div>
        <div className='relative px-4 py-5 rounded-xl min-w-72 w-72 flex flex-col justify-between bg-[url(/assets/menu.jpg)]  h-96 text-white bg-cover bg-center'>
          <div className='rounded-xl absolute top-0 left-0 bottom-0 right-0 bg-linear-to-b  from-black/0  to-black/80 from-0% via-30% to-80%'></div>

          <div className='self-end z-10 bg-main-purple/45  text-lg flex items-center gap-2 px-2 rounded-lg'>
            <MdOutlineStar />
            <span className='margin-0 font-medium'>4.5</span>
          </div>
          <div className='z-10'>
            <h4 className='text-2xl font-lora font-semibold'>Caramel choco</h4>
            <p className='text-pink-100 text-md'>&#8358; 12.00</p>
          </div>
        </div>
        <div className='relative px-4 py-5 rounded-xl min-w-72 w-72 flex flex-col justify-between bg-[url(/assets/menu.jpg)]  h-96 text-white bg-cover bg-center'>
          <div className='rounded-xl absolute top-0 left-0 bottom-0 right-0 bg-linear-to-b  from-black/0  to-black/80 from-0% via-30% to-80%'></div>

          <div className='self-end z-10 bg-main-purple/45  text-lg flex items-center gap-2 px-2 rounded-lg'>
            <MdOutlineStar />
            <span className='margin-0 font-medium'>4.5</span>
          </div>
          <div className='z-10'>
            <h4 className='text-2xl font-lora font-semibold'>Caramel choco</h4>
            <p className='text-pink-100 text-md'>&#8358; 12.00</p>
          </div>
        </div>
      </section>
      <button className='my-8 mx-auto flex items-center w-36 justify-center gap-2 btn border border-pink-900 text-pink-900 bg-transparent capitalize'>
        view all
        <MdChevronRight className='text-2xl' />
      </button>
    </section>
  );
};

export default BestOfWeek;
