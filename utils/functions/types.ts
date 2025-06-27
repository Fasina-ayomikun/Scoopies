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
export interface sendMessageInterface {
  name: string;
  email: string;
  message: string;
}
export interface UserInterface {
  name: string;
  email: string;
  role: string;
}
export interface contextInterface {
  user: UserInterface;
  setUser: React.Dispatch<React.SetStateAction<UserInterface>>;
}
export type TagField = "flavors" | "ingredients";
export interface iceCreamContextInterface {
  deleteTags: ({ type, index }: { type: TagField; index: number }) => void;
  handleTags: ({ type, value }: { type: TagField; value: string }) => void;
  setValues: React.Dispatch<React.SetStateAction<iceCreamInterface>>;
  values: iceCreamInterface;
}

export interface iceCreamInterface {
  name: string;
  desc: string;
  price: number;
  flavors?: string[] | undefined;
  ingredients?: string[] | undefined;
  images?: { id: string; url: string }[] | undefined;
}
export interface iceCreamFullInterface extends iceCreamInterface {
  _id: string;
  createdAt?: string;
  averageRatings: number;
}
import { InferType } from "yup";

export interface modalContextInterface {
  isSidebarOpen?: boolean;
  setIsSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  openSidebar: () => void;
  closeSidebar: () => void;
  openAddToCart: boolean;
  setOpenAddToCart: React.Dispatch<React.SetStateAction<boolean>>;
}
export enum Direction {
  left = "left",
  right = "right",
}
