"use client";
import CartFilled from "@/components/CartFilled";
import Navbar from "@/components/Navbar";
import SingleRecipeDetails from "@/components/SingleRecipeDetails";
import BackBtn from "@/mini-components/BackBtn";
import CartItem from "@/mini-components/CartItem";
import Subheader from "@/mini-components/Subheader";
import { useSearchParams } from "next/navigation";

const SingleRecipe = () => {
  const id = useSearchParams().get("id");
  return (
    <section>
      <Navbar />
      <BackBtn />
      <SingleRecipeDetails id={id ? id : ""} />
    </section>
  );
};

export default SingleRecipe;
