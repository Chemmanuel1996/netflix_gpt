// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI_Y_3q9InpG1jeIS2VGJkNRST4PXfnX8",
  authDomain: "netflixgpt-f6f0f.firebaseapp.com",
  projectId: "netflixgpt-f6f0f",
  storageBucket: "netflixgpt-f6f0f.appspot.com",
  messagingSenderId: "941875631390",
  appId: "1:941875631390:web:34fc95d494f0359314a50f",
  measurementId: "G-WKDFWTBV5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
