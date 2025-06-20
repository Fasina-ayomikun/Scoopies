"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const BackBtn = () => {
  const navigator = useRouter();
  return (
    <button
      type='button'
      className='flex items-center mx-auto w-11/12 gap-2 mt-10 mb-5'
      onClick={() => {
        navigator.back();
      }}
    >
      <FaChevronLeft className='text-pink-900' />
      Back
    </button>
  );
};

export default BackBtn;
