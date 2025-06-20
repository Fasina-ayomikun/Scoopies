"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { contextInterface, modalContextInterface } from "../functions/types";

const modalContext = createContext<modalContextInterface>(null!);

function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <modalContext.Provider value={{ openSidebar, closeSidebar, isSidebarOpen }}>
      {children}
    </modalContext.Provider>
  );
}

export const useModalProvider = () => {
  return useContext(modalContext);
};

export default ModalProvider;
