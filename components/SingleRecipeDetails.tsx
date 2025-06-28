"use client";
import { useModalProvider } from "@/utils/context/modalContext";
import { iceCreamFullInterface } from "@/utils/functions/types";
import axios from "axios";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SingleRecipeDetails = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useRouter();
  const pathname = usePathname();
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
  const getIceCream = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/products/ice-cream/${id}`);
      console.log("====================================");
      console.log(response);
      console.log("====================================");
      if (response.status === 200) {
        setProduct(response.data.iceCream);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getIceCream();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section className='grid grid-cols-1  gap-9 md:grid-cols-2 w-11/12 mx-auto max-w-6xl mt-10'>
      <section className='flex  flex-col gap-6'>
        <div className='relative w-full min-h-92'>
          <Image
            src={
              product.images
                ? product.images[0].url
                : "/assets/seo/recipe2.webp"
            }
            alt='recipe'
            sizes='100vw'
            fill
            className='object-cover rounded-lg'
          />
        </div>
        <div>
          <p className='mb-3 capitalize'>Other flavors:</p>
          <div className='grid grid-cols-3 items-center gap-4 justify-between '>
            {product.images
              ? product.images.map((image, index) => {
                  return (
                    <Image
                      key={image.id}
                      src={image.url}
                      alt={product.name}
                      width={200}
                      height={200}
                      className='object-cover rounded-md w-full aspect-square '
                    />
                  );
                })
              : null}
          </div>
        </div>
      </section>
      <section>
        <h3 className='capitalize font-semibold md:text-2xl text-lg mb-2'>
          {product.name}
        </h3>
        <p className='text-sm text-gray-600 mb-8'>{product.desc}</p>
        <ul className='list-disc list-inside list'>
          <li className='list-none font-medium mb-2'>Ingredients:</li>
          {product.ingredients?.map((item, index) => (
            <li className='px-5 my-1' key={index}>
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            navigator.push(`${pathname}?id=${product._id}&openAddToCart=true`);
          }}
          className='md:w-full capitalize flex justify-center btn bg-main-purple w-32 text-white mx-auto my-7'
        >
          order now
        </button>
      </section>
    </section>
  );
};

export default SingleRecipeDetails;
