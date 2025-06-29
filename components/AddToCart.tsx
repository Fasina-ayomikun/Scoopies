"use client";
import { iceCreamFullInterface } from "@/utils/functions/types";
import axios from "axios";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

const AddToCart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const getParams = useSearchParams();
  const id = getParams.get("id");
  const openAddToCart = getParams.get("openAddToCart");
  const navigator = useRouter();
  const [product, setProduct] = useState<iceCreamFullInterface>({
    name: "",
    desc: "",
    ingredients: [""],
    flavors: [""],
    price: 0,
    images: [{ id: "3131", url: "/assets/seo/recipe1.webp" }],
    _id: "",
    createdAt: "",
    averageRatings: 0,
  });
  useEffect(() => {
    const fetchIceCream = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/products/ice-cream/${id}`);
        if (response.status === 200) {
          setProduct(response.data.iceCream);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchIceCream();
    }
  }, [id]);

  return (
    <section
      className={`z-50 fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black/70  items-center justify-center flex`}
      onClick={() => navigator.back()}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <main
          onClick={(e) => e.stopPropagation()}
          className='bg-white py-7 rounded-md w-4/5 h-fit  max-w-2xl '
        >
          <div className=' flex items-center justify-end w-11/12 mx-auto mb-6'>
            <FaTimes className='text-lg' onClick={() => navigator.back()} />
          </div>
          <div className=' grid grid-cols-3 w-11/12  h-25 mx-auto items-center gap-1 justify-start mb-4 '>
            {product.images &&
              product.images.map((image) => {
                return (
                  <div className='h-full relative' key={image.id}>
                    <Image
                      src={image.url}
                      alt={image.id}
                      fill
                      sizes='100vw'
                      className='object-cover rounded-md w-full h-full border-2 border-pink-900'
                    />
                  </div>
                );
              })}
          </div>
          <h3 className='font-semibold w-11/12 mx-auto md:text-2xl text-lg mb-2'>
            {product.name}
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
              {product.flavors?.map((flavor, index) => (
                <option value={flavor} key={index}>
                  {flavor}
                </option>
              ))}
            </select>

            <label
              htmlFor=''
              className='block my-4 w-11/12 mx-auto mt-6 font-medium'
            >
              Ingredients
            </label>
            {product.ingredients?.map((ingredient, index) => (
              <label
                htmlFor=''
                className='mb-1 flex w-11/12 mx-auto items-center gap-2 '
                key={index}
              >
                <input
                  type='checkbox'
                  name={ingredient}
                  id={ingredient}
                  value={ingredient}
                  className=' accent-green-400 '
                />{" "}
                {ingredient}
              </label>
            ))}

            <hr className='w-full border-0 bg-gray-500 h-[1px] my-4' />
            <div className='flex w-11/12 mx-auto items-center justify-between gap-2'>
              <div className=' flex items-center gap-2'>
                <p className='font-medium'>Quantity:</p>
                <div className='flex items-center gap-4'>
                  <FaMinus
                    className='text-pink-900'
                    onClick={() =>
                      setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))
                    }
                  />
                  <span>{quantity}</span>
                  <FaPlus
                    className='text-pink-900'
                    onClick={() => setQuantity((prev) => prev + 1)}
                  />
                </div>
              </div>
              <p className='font-semibold'>
                Total: &#8358; {product.price * quantity}
              </p>
            </div>

            <hr className='w-full border-0 bg-gray-500 h-[1px] my-4' />
            <button className='btn bg-main-purple mx-auto flex items-center justify-center mt-8 text-white capitalize'>
              add to cart
            </button>
          </form>
        </main>
      )}
    </section>
  );
};

export default AddToCart;
