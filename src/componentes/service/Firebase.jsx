// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKAv7Zdki030K60mtBpSLkPIUQXjQzdSw",
  authDomain: "project-marvel-dbdf6.firebaseapp.com",
  projectId: "project-marvel-dbdf6",
  storageBucket: "project-marvel-dbdf6.appspot.com",
  messagingSenderId: "509337338216",
  appId: "1:509337338216:web:350bba0acc990e73f356dd",
  measurementId: "G-J6R1HCZKB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
