import React from "react";
import {
  MdAddCircleOutline,
  MdLockClock,
  MdPhone,
  MdPunchClock,
  MdTimer,
} from "react-icons/md";
import Ratings from "./Ratings";
import Image from "next/image";
import { FaClock } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";

const LocationCard = () => {
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
      <Ratings ratings={3.5} />

      <h4 className='text-2xl mt-3 capitalize font-semibold '>lekki branch</h4>
      <p className='text-gray-500 my-2 mb-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
        repellendus!
      </p>

      <p className='flex items-center gap-2 mb-2'>
        <IoMdClock className='text-pink-900 text-xl' /> Mon-Fri: 8AM - 8PM
      </p>
      <p className='flex items-center gap-2'>
        <MdPhone className='text-pink-900 text-xl' /> +234 400 4332
      </p>
    </div>
  );
};

export default LocationCard;
