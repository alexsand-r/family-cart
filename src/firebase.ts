// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkGaKQHza3J1Ec-u39xxwLa0fDEpQ3onU",
  authDomain: "family-cart-2f945.firebaseapp.com",
  projectId: "family-cart-2f945",
  storageBucket: "family-cart-2f945.firebasestorage.app",
  messagingSenderId: "298723453976",
  appId: "1:298723453976:web:3653c840db21f4f845a76d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Додайте цей рядок, щоб TypeScript дозволив імпортувати базу даних:
export const db = getFirestore(app);
