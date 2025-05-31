"use client";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export const signupWithEmail = async ({
  email,
  name,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    if (user && auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    }
    console.log("====================================");
    console.log(user);
    console.log("====================================");
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};
export const signinWithEmail = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("====================================");
    console.log(user);
    console.log("====================================");
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};
export const signinWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("====================================");
    console.log(result);
    console.log("====================================");
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};
