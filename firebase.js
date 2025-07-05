// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKo1_mKh1cpV2Hkg1mI0wHfkfnx01ZEFs",
  authDomain: "renart-global-case-study.firebaseapp.com",
  projectId: "renart-global-case-study",
  storageBucket: "renart-global-case-study.firebasestorage.app",
  messagingSenderId: "173111282808",
  appId: "1:173111282808:web:61dd1d960a3093a0c8718d",
  measurementId: "G-VP7SWD6924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);