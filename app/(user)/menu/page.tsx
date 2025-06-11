import Hero from "@/components/Hero";
import MenuDetails from "@/components/MenuDetails";
import Filter from "@/mini-components/Filter";
import MenuCard from "@/mini-components/MenuCard";
import Subheader from "@/mini-components/Subheader";
import React from "react";

const Menu = () => {
  return (
    <section>
      <Hero
        text={["Choose your favorite", "flavor"]}
        desc='Lremdiiqe  oeiqeq eoqeqpe'
        bgImg='menu'
      />
      <MenuDetails />
    </section>
  );
};

export default Menu;
