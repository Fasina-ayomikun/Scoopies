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
        <section>
          <div className='relative w-4/5 mx-auto h-96 my-6 mb-8'>
            <Image
              src={"/assets/seo/about-us.webp"}
              alt='A waiter serving'
              fill
              className='object-cover rounded-t-full'
            />
          </div>
          <Subheader text='Who Are We?' direction={Direction.left} />
          <p className='w-4/5 mx-auto text-gray-700 my-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ut
            reprehenderit placeat illum eveniet esse cupiditate, voluptate ipsam
            aliquam tenetur corporis! Aliquid dignissimos pariatur quod possimus
            magnam reprehenderit molestias deleniti alias error corrupti?
            Assumenda cum consequatur dolores tempore cumque nostrum qui nulla
            praesentium velit natus asperiores molestiae sapiente culpa corporis
            quia quibusdam, laudantium in repellat voluptate distinctio quidem
            consequuntur? Dolore quo, a eaque dolor corporis, recusandae laborum
            commodi reprehenderit ipsum impedit optio, nemo expedita culpa
            corrupti nostrum. Eaque aliquid, iure excepturi nesciunt impedit
            culpa facilis ducimus enim quia nam beatae in officiis nostrum porro
            nobis provident? Vero minus quasi consectetur.
          </p>
        </section>
        <section>
          <Subheader text='Where to find us' direction={Direction.right} />
          <div className='grid grid-cols-1 gap-7 items-center'>
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
