"use client";
import React, { createContext, useContext, useState } from "react";
import {
  iceCreamContextInterface,
  iceCreamInterface,
  TagField,
} from "../functions/types";

const iceCreamContext = createContext<iceCreamContextInterface>(null!);

const initialState = {
  name: "",
  desc: "",
  price: 0,
  flavors: [],
  ingredients: [],
  images: [{ public_id: "", url: "" }],
};

function IceCreamProvider({ children }: { children: React.ReactNode }) {
  const [values, setValues] = useState<iceCreamInterface>(initialState);
  const handleTags = ({ type, value }: { type: TagField; value: string }) => {
    if (!value.trim() || value.startsWith(" ") || value === ",") return;

    if (value.includes(",")) {
      const tag = value.split(",")[0].trim();
      if (!tag) return;

      setValues((prev) => {
        const currentArray = prev[type];
        if (currentArray?.includes(tag)) return prev;
        if (currentArray) {
          return {
            ...prev,
            [type]: [...currentArray, tag],
          };
        }
        return prev;
      });
    }
  };

  const deleteTags = ({ type, index }: { type: TagField; index: number }) => {
    setValues((prev) => {
      if (prev[type]) {
        const newArray = [...prev[type]];
        newArray.splice(index, 1);
        return {
          ...prev,
          [type]: newArray,
        };
      }
      return prev;
    });
  };

  return (
    <iceCreamContext.Provider
      value={{ deleteTags, handleTags, setValues, values }}
    >
      {children}
    </iceCreamContext.Provider>
  );
}

export const useIceCreamContext = () => {
  return useContext(iceCreamContext);
};

export default IceCreamProvider;
