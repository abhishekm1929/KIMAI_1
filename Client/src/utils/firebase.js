import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kimai-36555.firebaseapp.com",
  projectId: "kimai-36555",
  storageBucket: "kimai-36555.firebasestorage.app",
  messagingSenderId: "686795329402",
  appId: "1:686795329402:web:e39d002e9968cda5c090c3",
  measurementId: "G-YM2C8WG9S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}

