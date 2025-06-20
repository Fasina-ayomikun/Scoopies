"use client";
import { useModalProvider } from "@/utils/context/modalContext";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IoMdMenu } from "react-icons/io";
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
const navLinks = [
  {
    name: "Home",
    url: "/",
    icon: <MdHome />,
  },
  {
    name: "Menu",
    url: "/menu",
    icon: <MdMenu />,
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];
const Sidebar = () => {
  const pathname = usePathname();
  const navigate = useRouter();
  const { closeSidebar, isSidebarOpen } = useModalProvider();
  return (
    <aside
      onClick={() => closeSidebar()}
      className={`${
        isSidebarOpen ? "block" : "hidden"
      } fixed top-0 bottom-0 left-0 right-0 bg-black/30 w-screen h-screen z-20`}
    >
      <div
        className='bg-white h-full w-4/5 '
        onClick={(e) => e.stopPropagation()}
      >
        <nav className='flex items-center justify-between px-5 py-5 max-w-6xl mx-auto'>
          <Image
            src={"/assets/logo-coloured.png"}
            width={100}
            height={100}
            alt='Scoopies'
            className={`w-20 md:w-24 `}
          />
          <MdClose className='text-2xl' onClick={() => closeSidebar()} />
        </nav>

        <ul className='mt-8'>
          <li
            className={`mb-4 flex items-center gap-2 text-main-purple   py-3 px-5 text-lg ${
              pathname === "/" && "bg-main-purple/8"
            }`}
            onClick={() => {
              closeSidebar();
              navigate.push("/");
            }}
          >
            <MdHome className='text-2xl' /> <span>Home</span>
          </li>
          <li
            className={`mb-4 flex items-center gap-2 text-main-purple   py-3 px-5 text-lg ${
              pathname === "/menu" && "bg-main-purple/8"
            }`}
            onClick={() => {
              closeSidebar();
              navigate.push("/menu");
            }}
          >
            <MdRestaurantMenu className='text-2xl' /> <span>Menu</span>
          </li>
          <li
            className={`mb-4 flex items-center gap-2 text-main-purple   py-3 px-5 text-lg ${
              pathname === "/about-us" && "bg-main-purple/8"
            }`}
            onClick={() => {
              closeSidebar();
              navigate.push("/about-us");
            }}
          >
            <MdInfo className='text-2xl' /> <span>About</span>
          </li>
          <li
            className={`mb-4 flex items-center gap-2 text-main-purple   py-3 px-5 text-lg ${
              pathname === "/contact" && "bg-main-purple/8"
            }`}
            onClick={() => {
              closeSidebar();
              navigate.push("/contact");
            }}
          >
            <MdContactPhone className='text-2xl' /> <span>Contact</span>
          </li>
          <li
            className={`mb-4 flex items-center gap-2 text-main-purple   py-3 px-5 text-lg ${
              pathname === "/cart" && "bg-main-purple/8"
            }`}
            onClick={() => {
              closeSidebar();
              navigate.push("/cart");
            }}
          >
            <MdShoppingCart className='text-2xl' /> <span>Cart</span>
          </li>
          <li
            className={`mb-4 flex items-center gap-2 text-main-purple   py-3 px-5 text-lg ${
              pathname === "/logout" && "bg-main-purple/8"
            }`}
          >
            <MdLogout className='text-2xl' /> <span>Logout</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
