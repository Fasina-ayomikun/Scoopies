import CartItem from "@/mini-components/CartItem";
import Subheader from "@/mini-components/Subheader";
import React from "react";

const CartFilled = () => {
  return (
    <section>
      <Subheader text='Your Cart' showArrow={false} />
      <section className='mt-6 flex flex-col gap-3'>
        <CartItem />
        <CartItem />
        <CartItem />
        <p className='w-11/12 mx-auto py-2 flex items-center gap-3 justify-between'>
          <span className='capitalize text-md'>Total Amount:</span>{" "}
          <span className='text-xl font-semibold text-main-purple'>
            &#8358;150
          </span>
        </p>
        <button className='btn bg-pink-900 w-32 text-white mx-auto my-7'>
          Checkout
        </button>
      </section>
    </section>
  );
};

export default CartFilled;
