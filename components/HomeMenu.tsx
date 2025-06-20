import MenuCard from "@/mini-components/MenuCard";
import Subheader from "@/mini-components/Subheader";
import { Direction } from "@/utils/functions/types";
import React from "react";

const HomeMenu = () => {
  return (
    <section>
      <Subheader text='Our Menu' direction={Direction.right} />
      <section className='w-11/12 max-w-6xl mx-auto mt-10 p-3 grid grid-cols-1 gap-7  sm:grid-cols-2 lg:grid-cols-3'>
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </section>
      <button className='my-8 mx-auto flex items-center w-36 justify-center gap-2 btn border border-pink-900 text-pink-900 bg-transparent capitalize'>
        view all
      </button>
    </section>
  );
};

export default HomeMenu;
