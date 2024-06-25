// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "technoblog-1cdf3.firebaseapp.com",
  projectId: "technoblog-1cdf3",
  storageBucket: "technoblog-1cdf3.appspot.com",
  messagingSenderId: "281472468032",
  appId: "1:281472468032:web:73d2a09e7055d12e348ba5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
