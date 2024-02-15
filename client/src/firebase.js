// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mern-a2d57.firebaseapp.com",
  projectId: "mern-a2d57",
  storageBucket: "mern-a2d57.appspot.com",
  messagingSenderId: "303591739386",
  appId: "1:303591739386:web:42b3389cea28e7a58dde43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);