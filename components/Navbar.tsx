import Image from "next/image";
import React from "react";
import { FaAlignCenter, FaAlignJustify } from "react-icons/fa";

const Navbar = ({ showToggle = true }: { showToggle: boolean }) => {
  return (
    <header>
      <nav className='flex items-center justify-between px-5 py-3 max-w-6xl mx-auto'>
        <Image
          src={"/assets/logo-coloured.png"}
          width={100}
          height={100}
          alt='Scoopies'
          className='w-20'
        />
        {showToggle && <FaAlignJustify className='text-xl md:hidden' />}
      </nav>
    </header>
  );
};

export default Navbar;
