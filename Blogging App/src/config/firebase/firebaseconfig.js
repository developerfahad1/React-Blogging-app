// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyD8QcmtekWGf89SSj-okFsklixw0zjPlLM",
  authDomain: "reacts-blogging-app.firebaseapp.com",
  projectId: "reacts-blogging-app",
  storageBucket: "reacts-blogging-app.appspot.com",
  messagingSenderId: "124889222800",
  appId: "1:124889222800:web:c711bb8f1a78d0d1899215",
  measurementId: "G-3HGWMXDEXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app