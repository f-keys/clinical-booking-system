// Import the functions you need from the SDKs you need

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// import {onAuthStateChanged} from firebase/auth;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXAnnX8H64zrrvjPRtn4w4EBRvAqdx0SQ",
  authDomain: "clinical-booking-system.firebaseapp.com",
  projectId: "clinical-booking-system",
  storageBucket: "clinical-booking-system.appspot.com",
  messagingSenderId: "938212544925",
  appId: "1:938212544925:web:c2c095950dc04ecd165f74",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const fireauth = getAuth();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { password, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        email,
        password,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
