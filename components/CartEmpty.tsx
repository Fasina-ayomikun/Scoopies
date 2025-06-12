import Subheader from "@/mini-components/Subheader";
import { useRouter } from "next/navigation";
import React from "react";
import { MdRemoveShoppingCart } from "react-icons/md";

const CartEmpty = () => {
  const navigate = useRouter();
  return (
    <section className='px-3 py-10'>
      <MdRemoveShoppingCart className='text-8xl mx-auto mt-8 mb-4' />
      <Subheader text='Your Cart is Empty' showArrow={false} />
      <button
        onClick={() => {
          navigate.push("/menu");
        }}
        className='capitalize btn bg-pink-900 w-32 text-white mx-auto my-7 flex justify-center'
      >
        Order Now
      </button>
    </section>
  );
};

export default CartEmpty;
