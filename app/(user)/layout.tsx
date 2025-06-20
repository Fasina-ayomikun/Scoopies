import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='relative'>
      {children}
      <Footer />
      <Sidebar />
    </section>
  );
};

export default layout;
