"use client";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

// export const signupWithEmail = async ({
//   email,
//   name,
//   password,
// }: {
//   name: string;
//   email: string;
//   password: string;
// }) => {
//   try {
//     const result = await createUserWithEmailAndPassword(auth, email, password);
//     if (result && auth.currentUser) {
//       await updateProfile(auth.currentUser, {
//         displayName: name,
//       });
//     }
//     const user = result.user;
//     if (window) {
//       window.localStorage.setItem(
//         "SCOOPIES_CURRENT_USER",
//         JSON.stringify({ name: user.displayName, email: user.email })
//       );
//     }
//     console.log("====================================");
//     console.log(user);
//     console.log("====================================");
//   } catch (error) {
//     console.log("====================================");
//     console.log(error);

//     console.log("====================================");
//     throw Error("Registration failed");
//   }
// };
// export const signinWithEmail = async ({
//   email,
//   password,
// }: {
//   email: string;
//   password: string;
// }) => {
//   try {
//     const result = await signInWithEmailAndPassword(auth, email, password);
//     const user = result.user;
//     if (window) {
//       window.localStorage.setItem(
//         "SCOOPIES_CURRENT_USER",
//         JSON.stringify({ name: user.displayName, email: user.email })
//       );
//     }

//     console.log("====================================");
//     console.log(user);
//     console.log("====================================");
//   } catch (error) {
//     console.log("====================================");
//     console.log(error);
//     throw Error("Sign in failed");

//     console.log("====================================");
//   }
// };
// export const signinWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, googleProvider);
//     console.log("====================================");
//     console.log(result);
//     console.log("====================================");
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential?.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     if (window) {
//       window.localStorage.setItem(
//         "SCOOPIES_CURRENT_USER",
//         JSON.stringify({ name: user.displayName, email: user.email })
//       );
//     }
//   } catch (error) {
//     console.log("====================================");
//     console.log(error);
//     console.log("====================================");
//   }
// };
// export const passwordResetEmail = async (email: string) => {
//   try {
//     const result = await sendPasswordResetEmail(auth, email);
//     console.log("====================================");
//     console.log(result);
//     console.log("====================================");
//   } catch (error) {
//     console.log("====================================");
//     console.log(error);
//     console.log("====================================");
//   }
// };
