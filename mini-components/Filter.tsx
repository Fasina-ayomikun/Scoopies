"use client";
import React, { useState } from "react";

const Filter = ({ filters }: { filters: string[] }) => {
  const [active, setActive] = useState(0);
  return (
    <div className='flex items-center gap-5 flex-wrap justify-center '>
      {filters.map((filter, index) => {
        return (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`${
              index === active
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
