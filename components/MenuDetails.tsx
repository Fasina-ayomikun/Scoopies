import Filter from "@/mini-components/Filter";
import MenuCard from "@/mini-components/MenuCard";
import Subheader from "@/mini-components/Subheader";
import React from "react";

const MenuDetails = () => {
  return (
    <section className='px-5 py-10'>
      <Subheader text='Our Menu' showArrow={false} />
      <Filter />
      <section className='p-3 grid my-6 grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3'>
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </section>
      <button className='my-8 mx-auto flex items-center w-36 justify-center gap-2 btn border border-pink-900 text-pink-900 bg-transparent capitalize'>
        see more
      </button>
    </section>
  );
};

export default MenuDetails;
