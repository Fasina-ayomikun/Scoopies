"use client";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZa3McxIFC63Ce7zxDw1VZ9kemQVN_yWE",
  authDomain: "unichat-7e411.firebaseapp.com",
  projectId: "unichat-7e411",
  storageBucket: "unichat-7e411.appspot.com",
  messagingSenderId: "834891631263",
  appId: "1:834891631263:web:2db1ff1629ca7808c5f0aa",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const googleProvider = new GoogleAuthProvider();
