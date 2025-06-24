"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaInfo, FaInfoCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  showForgot?: boolean;
  label?: string;
  error?: string;
  textarea?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  showForgot = false,
  label,
  error,
  textarea = false,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useRouter();
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
        {textarea ? (
          <textarea
            name={label?.toLowerCase()}
            id={label?.toLowerCase()}
            rows={6}
            className='rounded-md px-4 py-3 w-full h-full bg-transparent outline-main-purple/50  focus:outline-1 tracking-wide'
            {...rest}
          />
        ) : (
          <input
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            name={label?.toLowerCase()}
            id={label?.toLowerCase()}
            className='rounded-md px-4 py-3 w-full h-full bg-transparent outline-main-purple/50  focus:outline-1 tracking-wide'
            {...rest}
          />
        )}
        {type === "password" && (
          <button
            type='button'
            onClick={() => setShowPassword((prev) => !prev)}
            className='underline  text-main-purple text-sm font-medium px-4 py-1 cursor-pointer'
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {showForgot && (
        <p
          onClick={() => navigate.push("/forgot-password")}
          className='cursor-pointer text-xs text-gray-500 capitalize text-end w-full'
        >
          Forgot password?
        </p>
      )}
      {error && (
        <p className='text-xs ml-3 text-red-500 flex items-center gap-1'>
          <FaInfoCircle /> {error}
        </p>
      )}
    </div>
  );
};

export default Input;
