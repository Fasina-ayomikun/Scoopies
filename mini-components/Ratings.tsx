"use client";
import React, { useEffect } from "react";
import { DiVim } from "react-icons/di";
import {
  MdOutlineStar,
  MdOutlineStarHalf,
  MdOutlineStarOutline,
} from "react-icons/md";

const Ratings = ({ ratings }: { ratings: number }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const num = index + 0.5;
    return (
      <span key={index}>
        {ratings >= index + 1 ? (
          <MdOutlineStar />
        ) : ratings >= num ? (
          <MdOutlineStarHalf />
        ) : (
          <MdOutlineStarOutline />
        )}
      </span>
    );
  });
  return (
    <div className='flex items-center  text-pink-900 text-lg'>{tempStars}</div>
  );
};

export default Ratings;
