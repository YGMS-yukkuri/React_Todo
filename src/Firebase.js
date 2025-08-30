// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzXV10PP5cEWP7eSZjrmA1ZMA1oojGYus",
  authDomain: "reacttodo-1a467.firebaseapp.com",
  projectId: "reacttodo-1a467",
  storageBucket: "reacttodo-1a467.firebasestorage.app",
  messagingSenderId: "343930079417",
  appId: "1:343930079417:web:5d73e24005a524953a7368",
  measurementId: "G-ZBR9WVP1PD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);