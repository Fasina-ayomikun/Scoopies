"use client";
import { signinWithGoogle, signupWithEmail } from "@/utils/functions/functions";
import { signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    signupWithEmail({
      email: "user2@gmail.com",
      password: "123458878h",
      name: "Hello",
    });
  }, []);
  return <button onClick={() => signinWithGoogle()}>hello</button>;
}
