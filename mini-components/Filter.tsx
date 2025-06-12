"use client";
import React, { useState } from "react";
const filters = ["all", "chocolate", "caramel", "mint", "strawberry"];

const Filter = () => {
  const [active, setActive] = useState("all");
  return (
    <div className='flex items-center gap-5 flex-wrap justify-center mt-10'>
      {filters.map((filter, index) => {
        return (
          <button
            key={index}
            onClick={() => setActive(filter.toLowerCase().trim())}
            className={`${
              filter.toLowerCase().trim() === active
                ? "shadow-main bg-white"
                : " shadow-inner bg-main-purple/8"
            }  px-6 py-1 lowercase  shadow-main-purple/60 rounded-sm`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
