import Image from "next/image";
import React from "react";
import { FaAlignCenter, FaAlignJustify } from "react-icons/fa";

const Navbar = ({
  showToggle = true,
  white = false,
}: {
  showToggle?: boolean;
  white?: boolean;
}) => {
  return (
    <header className='z-50 sticky  top-0 '>
      <nav className='flex items-center justify-between px-5 py-5 max-w-6xl mx-auto'>
        <Image
          src={white ? "/assets/logo-white.png" : "/assets/logo-coloured.png"}
          width={100}
          height={100}
          alt='Scoopies'
          className={`w-20 md:w-24 `}
        />
        {showToggle && <FaAlignJustify className='text-2xl md:hidden' />}
      </nav>
    </header>
  );
};

export default Navbar;
