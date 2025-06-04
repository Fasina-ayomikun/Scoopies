"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { contextInterface } from "../functions/types";

const AuthContext = createContext<contextInterface>(null!);

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState({ name: "", email: "" });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useContextProvider = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
