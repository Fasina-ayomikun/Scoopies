import React from "react";

export interface RegisterUserInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface SignInUserInterface {
  email: string;
  password: string;
}
export interface UserInterface {
  name: string;
  email: string;
}
export interface contextInterface {
  user: UserInterface;
  setUser: React.Dispatch<React.SetStateAction<UserInterface>>;
}
