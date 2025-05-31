"use client";
import React, { useState } from "react";
import { FaInfo, FaInfoCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showForgot?: boolean;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  showForgot = false,
  label,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='flex flex-col gap-2 items-start w-full my-4 mb-6'>
      {label && (
        <label
          htmlFor={label.toLowerCase()}
          className='tracking-wide   capitalize text-black text-sm font-normal mb-1'
        >
          {label}
        </label>
      )}
      <div className='bg-main-purple/3 border border-gray-300 rounded-md text-sm  w-full flex items-center gap-2  '>
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          name={label?.toLowerCase()}
          id={label?.toLowerCase()}
          className='rounded-md px-4 py-3 w-full h-full bg-transparent outline-main-purple/50  focus:outline-1 tracking-wide'
          {...rest}
        />
        {type === "password" && (
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className='underline  text-main-purple text-sm font-medium px-4 py-1 cursor-pointer'
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        )}
      </div>
      {showForgot && (
        <p className='text-xs text-gray-500 capitalize text-end w-full'>
          Forgot password?
        </p>
      )}

      <p className='text-xs ml-3 text-red-500 flex items-center gap-1'>
        <FaInfoCircle /> Errorssss
      </p>
    </div>
  );
};

export default Input;
