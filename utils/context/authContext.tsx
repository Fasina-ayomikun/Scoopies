"use client";
import { createContext, ReactNode, useContext } from "react";

interface initialStateInterface {
  isLoading: boolean;
  isError: boolean;
  user: any;
}
const initialState: initialStateInterface = {
  isLoading: false,
  user: {},
  isError: false,
};

const AuthContext = createContext<initialStateInterface | null>(null);

function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={initialState}>{children}</AuthContext.Provider>
  );
}

export const useContextProvider = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
