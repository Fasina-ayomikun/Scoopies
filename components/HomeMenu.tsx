"use client";
import MenuCard from "@/mini-components/MenuCard";
import Subheader from "@/mini-components/Subheader";
import { Direction, iceCreamFullInterface } from "@/utils/functions/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

const HomeMenu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [endSlice, setEndSlice] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [products, setProducts] = useState<iceCreamFullInterface[]>([]);

  const getAllIceCreams = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `/api/products/ice-cream?count=${endSlice}`
      );
      console.log("====================================");
      console.log(response);
      console.log("====================================");
      if (response.status === 200) {
        setProducts(response.data.iceCreams);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllIceCreams();
  }, [endSlice]);
  return (
    <section>
      <Subheader text='Our Menu' direction={Direction.right} />
      <section className='w-11/12 max-w-6xl mx-auto mt-10 p-3 grid grid-cols-1 gap-7  sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => {
          return <MenuCard key={product._id} product={product} />;
        })}
      </section>
      <button className='my-8 mx-auto flex items-center w-36 justify-center gap-2 btn border border-pink-900 text-pink-900 bg-transparent capitalize'>
        view all
      </button>
    </section>
  );
};

export default HomeMenu;
