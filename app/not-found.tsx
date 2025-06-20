"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section>
      <Navbar />
      <main className='py-14'>
        <h3 className='font-bold text-9xl text-center'> 404</h3>
        <p className='text-md text-center my-2 mb-5'>Ooops! Page not found</p>
        <button className=' mx-auto flex '>
          <Link
            href={"/"}
            className='btn rounded-full bg-main-purple text-white px-5'
          >
            Go Home
          </Link>
        </button>
      </main>
      <Footer />
    </section>
  );
};

export default NotFound;
