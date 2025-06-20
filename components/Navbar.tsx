"use client";
import { useModalProvider } from "@/utils/context/modalContext";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaAlignCenter, FaAlignJustify } from "react-icons/fa";
import {
  MdClose,
  MdContactPhone,
  MdHome,
  MdInfo,
  MdLogout,
  MdMenu,
  MdMenuBook,
  MdRestaurantMenu,
  MdShoppingCart,
} from "react-icons/md";
const Navbar = ({
  showToggle = true,
  white = false,
}: {
  showToggle?: boolean;
  white?: boolean;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openSidebar } = useModalProvider();
  const pathname = usePathname();
  const navigate = useRouter();

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
      className={`z-50 h-20  self-start row-span-1 flex items-center justify-center ${
        isScrolled && "fixed  top-0 left-0 right-0 bg-main-purple "
      }`}
    >
      <nav className='flex w-full items-center justify-between px-4 max-w-6xl mx-auto'>
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
        <ul className=' md:flex items-center gap-5 hidden '>
          <li
            className={` cursor-pointer flex items-center gap-2 ${
              white ? "text-white " : "text-gray-700"
            } ${pathname === "/" && "border-b border-pink-400"}`}
            onClick={() => {
              navigate.push("/");
            }}
          >
            Home{" "}
          </li>
          <li
            className={` cursor-pointer flex items-center gap-2 ${
              white ? "text-white " : "text-gray-700"
            } ${pathname === "/menu" && "border-b border-pink-400"}`}
            onClick={() => {
              navigate.push("/menu");
            }}
          >
            Menu
          </li>
          <li
            className={` cursor-pointer flex items-center gap-2 ${
              white ? "text-white " : "text-gray-700"
            } ${pathname === "/about-us" && "border-b border-pink-400"}`}
            onClick={() => {
              navigate.push("/about-us");
            }}
          >
            About
          </li>
          <li
            className={` cursor-pointer flex items-center gap-2 ${
              white ? "text-white " : "text-gray-700"
            } ${pathname === "/contact" && "border-b border-pink-400"}`}
            onClick={() => {
              navigate.push("/contact");
            }}
          >
            Contact
          </li>
        </ul>
        <div className='hidden md:block'>
          <button
            className={`rounded-full  w-2 justify-center gap-2 btn capitalize ${
              white ? "text-pink-900 bg-white" : "bg-pink-900 text-white"
            }`}
          >
            sign in
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
