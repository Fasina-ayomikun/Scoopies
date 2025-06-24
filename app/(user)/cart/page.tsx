import CartFilled from "@/components/CartFilled";
import Navbar from "@/components/Navbar";
import BackBtn from "@/mini-components/BackBtn";
import React from "react";

const Cart = () => {
  return (
    <section className='max-w-6xl mx-auto'>
      <Navbar />
      <BackBtn />
      {/* Filled cart */}
      <CartFilled />
    </section>
  );
};

export default Cart;
