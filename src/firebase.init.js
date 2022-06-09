// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrRi4pgSsBt1FfS6wH4nG2t2cf5V5Rbc0",
  authDomain: "myprotfolio-f06a9.firebaseapp.com",
  projectId: "myprotfolio-f06a9",
  storageBucket: "myprotfolio-f06a9.appspot.com",
  messagingSenderId: "949039507480",
  appId: "1:949039507480:web:c51975e052c2df4e4fbb6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;