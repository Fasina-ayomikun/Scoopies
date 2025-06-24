import Navbar from "@/components/Navbar";
import LocationCard from "@/mini-components/LocationCard";
import Subheader from "@/mini-components/Subheader";
import { Direction } from "@/utils/functions/types";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section>
      <Navbar />
      <section>
        <section className='grid grid-cols-1 gap-5 py-15 md:gap-10 md:grid-cols-3 max-w-6xl  mx-auto h-full  items-center'>
          <div className='relative md:w-full mx-auto h-96 min-h-72 md:col-span-1  md:h-full   w-11/12 '>
            <Image
              src={"/assets/seo/about-us.webp"}
              alt='A waiter serving'
              fill
              sizes='100vw'
              className='object-cover rounded-t-full'
            />
          </div>
          <div className='md:pl-0 pl-6 md:col-span-2'>
            <Subheader text='Who Are We?' direction={Direction.left} />
            <p className='w-full pr-6 md:pr-0 mx-auto text-gray-700 my-5 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ut
              reprehenderit placeat illum eveniet esse cupiditate, voluptate
              ipsam aliquam tenetur corporis! Aliquid dignissimos pariatur quod
              possimus magnam reprehenderit molestias deleniti alias error
              corrupti? Assumenda cum consequatur dolores tempore cumque nostrum
              qui nulla praesentium velit natus asperiores molestiae sapiente
              culpa corporis quia quibusdam, laudantium in repellat voluptate
              distinctio quidem consequuntur? Dolore quo, a eaque dolor
              corporis, recusandae laborum commodi reprehenderit ipsum impedit
              optio, nemo expedita culpa corrupti nostrum. Eaque aliquid, iure
              excepturi nesciunt impedit culpa facilis ducimus enim quia nam
              beatae in officiis nostrum porro nobis provident? Vero minus quasi
              consectetur.
            </p>
          </div>
        </section>
        <section>
          <Subheader text='Where to find us' direction={Direction.right} />
          <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 max-w-6xl mx-auto gap-6 items-center w-11/12 mt-6'>
            <LocationCard />
            <LocationCard />
            <LocationCard />
          </div>
        </section>
        <button className='my-8 mx-auto flex items-center w-36 justify-center gap-2 btn border border-pink-900 text-pink-900 bg-transparent capitalize'>
          order now
        </button>
      </section>
    </section>
  );
};

export default AboutUs;
