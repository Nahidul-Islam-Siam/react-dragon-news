// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV1_oxIc1oMNKR9ckUC0XW3BEt4X5gJ_I",
  authDomain: "react-dragon-news-d5540.firebaseapp.com",
  projectId: "react-dragon-news-d5540",
  storageBucket: "react-dragon-news-d5540.appspot.com",
  messagingSenderId: "734616069027",
  appId: "1:734616069027:web:026f3518599a67aac4f016"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app