"use client";
import { useModalProvider } from "@/utils/context/modalContext";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaAlignCenter, FaAlignJustify } from "react-icons/fa";

const Navbar = ({
  showToggle = true,
  white = false,
}: {
  showToggle?: boolean;
  white?: boolean;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openSidebar } = useModalProvider();
  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        console.log(window.scrollY);
        if (window.scrollY >= 100) {
          console.log(isScrolled);

          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      });
    }
    () => {
      window.removeEventListener("scroll", () => {
        console.log(window.scrollY);
        if (window.scrollY >= 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      });
    };
  }, []);
  return (
    <header
      className={`z-50 ${
        isScrolled && "fixed top-0 left-0 right-0 bg-main-purple"
      }`}
    >
      <nav className='flex items-center justify-between px-5 py-5 max-w-6xl mx-auto'>
        <Image
          src={white ? "/assets/logo-white.png" : "/assets/logo-coloured.png"}
          width={100}
          height={100}
          alt='Scoopies'
          className={`w-20 md:w-24 `}
        />
        {showToggle && (
          <FaAlignJustify
            onClick={() => openSidebar()}
            className='text-2xl md:hidden'
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
