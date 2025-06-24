"use client";
import AddToCart from "@/components/AddToCart";
import BestOfWeek from "@/components/BestOfWeek";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeMenu from "@/components/HomeMenu";
import HomeTestimonial from "@/components/HomeTestimonial";
import Navbar from "@/components/Navbar";
import Ratings from "@/mini-components/Ratings";
import Subheader from "@/mini-components/Subheader";
import { useContextProvider } from "@/utils/context/authContext";
import { signinWithGoogle, signupWithEmail } from "@/utils/functions/functions";
import { Direction, UserInterface } from "@/utils/functions/types";
import { signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useEffect } from "react";
import { FaChevronRight, FaStar } from "react-icons/fa";
import {
  MdAdd,
  MdAddCircle,
  MdAddCircleOutline,
  MdChevronRight,
  MdOutlineStar,
  MdOutlineStarHalf,
  MdOutlineStarOutline,
  MdStar,
} from "react-icons/md";

export default function Home() {
  const { setUser } = useContextProvider();
  useEffect(() => {
    let user: string | UserInterface | null = window.localStorage.getItem(
      "SCOOPIES_CURRENT_USER"
    );
    user = user ? JSON.parse(user) : null;
    if (user) {
      setUser(user as UserInterface);
    }
  }, []);
  return (
    <section className='relative'>
      <Hero
        text={["Get your favorite ice", "cream flavor"]}
        desc='Lremdiiqe  oeiqeq eoqeqpe'
        bgImg='bg-[url(/assets/seo/home.webp)]'
      />
      <BestOfWeek />
      <HomeMenu />
      <HomeTestimonial />
      <AddToCart />
    </section>
  );
}
