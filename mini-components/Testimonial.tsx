import React from "react";
import Ratings from "./Ratings";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className='  w-4/5 mx-auto md:w-full'>
      <div className='flex items-center gap-3  mb-7'>
        <div className='relative w-20 aspect-square rounded-full'>
          <Image
            src={"/assets/human1.jpg"}
            fill
            sizes='100vw'
            alt='human'
            className='object-cover rounded-full'
          />
        </div>
        <div>
          <h4 className='text-2xl mb-2 font-semibold uppercase'>Alex wane</h4>
          <Ratings ratings={5} />
        </div>
      </div>
      <p className=' italic tracking-wider leading-7 text-gray-600'>
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem libero
        earum natus ratione laboriosam nostrum asperiores voluptatum dolorum
        voluptatem fugit."
      </p>
    </div>
  );
};

export default Testimonial;
