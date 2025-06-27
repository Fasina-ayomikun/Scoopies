"use client";
import Filter from "@/mini-components/Filter";
import MenuCard from "@/mini-components/MenuCard";
import Subheader from "@/mini-components/Subheader";
import {
  iceCreamFullInterface,
  iceCreamInterface,
} from "@/utils/functions/types";
import { menuFilters } from "@/utils/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MenuDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [endSlice, setEndSlice] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [products, setProducts] = useState<iceCreamFullInterface[]>([]);
  const [flavors, setFlavors] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("");
  const getAllIceCreams = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `/api/products/ice-cream?${
          filter && `flavor=${filter}`
        }&count=${endSlice}`
      );
      console.log("====================================");
      console.log(response);
      console.log("====================================");
      if (response.status === 200) {
        setProducts(response.data.iceCreams);
        setFlavors(response.data.allFlavors);
        setHasMore(response.data.hasMore);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllIceCreams();
  }, [filter, endSlice]);
  return (
    <section className='px-5 py-10'>
      <Subheader text='Our Menu' showArrow={false} />
      <br />
      <Filter filters={flavors} setFilter={setFilter} />
      <section className='max-w-6xl mx-auto p-3 grid my-6 grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => {
          return <MenuCard key={product._id} product={product} />;
        })}
      </section>
      {hasMore && (
        <button
          onClick={() =>
            setEndSlice((prev) => {
              return prev + 3;
            })
          }
          className='my-8 mx-auto flex items-center w-36 justify-center gap-2 btn border border-pink-900 text-pink-900 bg-transparent capitalize'
        >
          see more
        </button>
      )}
    </section>
  );
};

export default MenuDetails;
