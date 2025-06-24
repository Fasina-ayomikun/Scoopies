import Image from "next/image";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const AddToCart = () => {
  return (
    <section className='fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black/50 flex items-center justify-center'>
      <main className='bg-white rounded-sm w-3/5 h-full max-w-2xl'>
        <div className='grid grid-cols-3 items-center gap-1 justify-start mb-4 '>
          <Image
            src={"/assets/seo/recipe1.webp"}
            alt='recipe'
            width={200}
            height={200}
            className='object-cover rounded-md w-full aspect-square border-2 border-pink-900'
          />
          <Image
            src={"/assets/seo/recipe2.webp"}
            alt='recipe'
            width={200}
            height={200}
            className='object-cover rounded-md w-full aspect-square'
          />
          <Image
            src={"/assets/seo/recipe2.webp"}
            alt='recipe'
            width={200}
            height={200}
            className='object-cover rounded-md w-full aspect-square'
          />
        </div>
        <h3 className='font-semibold md:text-2xl text-lg mb-2'>
          Creamy Chocolate
        </h3>
        <form action=''>
          <label
            htmlFor='flavor'
            className='capitalize text-gray-800 block mb-2'
          >
            choose a flavor
          </label>
          <select
            name='flavor'
            id='flavor'
            className='w-full px-3 py-3 border border-gray-800 rounded-sm block mc-4'
          >
            <option value='' className='capitalize px-3 py-3'>
              Choose a flavor
            </option>
            <option value='chocolate'>chocolate</option>
          </select>

          <label htmlFor=''>Ingredient</label>
          <label htmlFor=''>
            <input type='checkbox' name='' id='' /> Chocolate
          </label>
          <label htmlFor=''>
            <input type='checkbox' name='' id='' /> Chocolate
          </label>
          <label htmlFor=''>
            <input type='checkbox' name='' id='' /> Chocolate
          </label>

          <hr />
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <p>Quantity:</p>
              <div className='flex items-center gap-2'>
                <FaMinus className='text-pink-900' />
                <span>2</span>
                <FaPlus className='text-pink-900' />
              </div>
            </div>
            <p>Total: &#8358;50</p>
          </div>
          <hr />
          <button className='btn bg-main-purple text-white capitalize'>
            add to cart
          </button>
        </form>
      </main>
    </section>
  );
};

export default AddToCart;
