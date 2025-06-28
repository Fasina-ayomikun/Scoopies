"use client";
import AddToCart from "@/components/AddToCart";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { useModalProvider } from "@/utils/context/modalContext";
import { useSearchParams } from "next/navigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const getParams = useSearchParams();
  const id = getParams.get("id");
  const openAddToCart = getParams.get("openAddToCart");
  return (
    <section className='relative'>
      {children}
      <Footer />
      <Sidebar />
      {Boolean(openAddToCart) && id && <AddToCart />}
    </section>
  );
};

export default layout;
