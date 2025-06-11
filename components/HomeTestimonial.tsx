import Subheader from "@/mini-components/Subheader";
import Testimonial from "@/mini-components/Testimonial";
import { Direction } from "@/utils/functions/types";
import React from "react";

const HomeTestimonial = () => {
  return (
    <section className='py-6'>
      <Subheader text='What People Say' direction={Direction.left} />
      <section className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </section>
    </section>
  );
};

export default HomeTestimonial;
