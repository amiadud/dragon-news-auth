// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiODvVb8W6-PXMuh_w_xkR5pBYf7JWnPQ",
  authDomain: "dragon-news-auth-b224c.firebaseapp.com",
  projectId: "dragon-news-auth-b224c",
  storageBucket: "dragon-news-auth-b224c.appspot.com",
  messagingSenderId: "478012493022",
  appId: "1:478012493022:web:60a1df8fb19492bc36c64f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth