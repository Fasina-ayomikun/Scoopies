import CartFilled from "@/components/CartFilled";
import Navbar from "@/components/Navbar";
import CartItem from "@/mini-components/CartItem";
import Subheader from "@/mini-components/Subheader";
import Image from "next/image";
import React from "react";
import { FaChevronLeft, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import {
  MdLineAxis,
  MdOutlineRemoveShoppingCart,
  MdOutlineShoppingCart,
  MdPlusOne,
  MdRemoveShoppingCart,
  MdShoppingCart,
  MdShoppingCartCheckout,
} from "react-icons/md";

const Cart = () => {
  return (
    <section>
      <Navbar />
      <a
        type='button'
        href='/'
        className='flex items-center mx-auto w-11/12 gap-2 mt-10 mb-5'
      >
        <FaChevronLeft className='text-pink-900' />
        Back
      </a>
      {/* Filled cart */}
      <CartFilled />
    </section>
  );
};

export default Cart;
