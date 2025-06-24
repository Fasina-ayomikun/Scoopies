import { useModalProvider } from "@/utils/context/modalContext";
import Image from "next/image";
import React from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

const AddToCart = () => {
  const { openAddToCart, setOpenAddToCart } = useModalProvider();
  return (
    <section
      className={`z-50 fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black/70  items-center justify-center ${
        openAddToCart ? "flex" : "hidden"
      }`}
      onClick={() => setOpenAddToCart(false)}
    >
      <main
        onClick={(e) => e.stopPropagation()}
        className='bg-white py-7 rounded-md w-4/5 h-fit  max-w-2xl '
      >
        <div className=' flex items-center justify-end w-11/12 mx-auto mb-6'>
          <FaTimes
            className='text-lg'
            onClick={() => setOpenAddToCart(false)}
          />
        </div>
        <div className=' grid grid-cols-3 w-11/12  h-25 mx-auto items-center gap-1 justify-start mb-4 '>
          <div className='h-full relative'>
            <Image
              src={"/assets/seo/recipe1.webp"}
              alt='recipe'
              fill
              className='object-cover rounded-md w-full h-full border-2 border-pink-900'
            />
          </div>
          <div className='h-full relative'>
            <Image
              src={"/assets/seo/recipe2.webp"}
              alt='recipe'
              fill
              className='object-cover rounded-md w-full h-full'
            />
          </div>
          <div className='h-full relative'>
            <Image
              src={"/assets/seo/recipe2.webp"}
              alt='recipe'
              fill
              className='object-cover rounded-md w-full h-full'
            />
          </div>
        </div>
        <h3 className='font-semibold w-11/12 mx-auto md:text-2xl text-lg mb-2'>
          Creamy Chocolate
        </h3>
        <form action='' className=''>
          <label
            htmlFor='flavor'
            className='capitalize w-11/12 mx-auto text-gray-800 block mb-2'
          >
            choose a flavor
          </label>
          <select
            name='flavor'
            id='flavor'
            className='focus:outline-1 w-11/12 mx-auto focus:outline-main-purple bg-gray-300  px-3 py-3 border appearance-none border-gray-400 rounded-sm block mc-4'
          >
            <option value='' className='capitalize px-3 py-3'>
              Choose a flavor
            </option>
            <option value='chocolate'>chocolate</option>
          </select>

          <label
            htmlFor=''
            className='block my-4 w-11/12 mx-auto mt-6 font-medium'
          >
            Ingredients
          </label>
          <label
            htmlFor=''
            className='mb-1 flex w-11/12 mx-auto items-center gap-2 '
          >
            <input
              type='checkbox'
              name=''
              id=''
              className=' accent-green-400 '
            />{" "}
            Chocolate
          </label>

          <label
            htmlFor=''
            className='mb-1 flex w-11/12 mx-auto items-center gap-2 '
          >
            <input
              type='checkbox'
              name=''
              id=''
              className=' accent-green-400 '
            />{" "}
            Chocolate
          </label>

          <hr className='w-full border-0 bg-gray-500 h-[1px] my-4' />
          <div className='flex w-11/12 mx-auto items-center justify-between gap-2'>
            <div className=' flex items-center gap-2'>
              <p className='font-medium'>Quantity:</p>
              <div className='flex items-center gap-4'>
                <FaMinus className='text-pink-900' />
                <span>2</span>
                <FaPlus className='text-pink-900' />
              </div>
            </div>
            <p className='font-semibold'>Total: &#8358;50</p>
          </div>

          <hr className='w-full border-0 bg-gray-500 h-[1px] my-4' />
          <button className='btn bg-main-purple mx-auto flex items-center justify-center mt-8 text-white capitalize'>
            add to cart
          </button>
        </form>
      </main>
    </section>
  );
};

export default AddToCart;
