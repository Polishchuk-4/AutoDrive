import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "autodrivetest-44677.firebaseapp.com",
  projectId: "autodrivetest-44677",
  storageBucket: "autodrivetest-44677.firebasestorage.app",
  messagingSenderId: "195564648759",
  appId: "1:195564648759:web:d6ae5fa19ed718cce2c2b2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
