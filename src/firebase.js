// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX8vihvhf3GIrLFXpnevQn8ZbUu7GJkWA",
  authDomain: "rebel-design-solutions.firebaseapp.com",
  databaseURL: "https://rebel-design-solutions-default-rtdb.firebaseio.com",
  projectId: "rebel-design-solutions",
  storageBucket: "rebel-design-solutions.appspot.com",
  messagingSenderId: "137022820127",
  appId: "1:137022820127:web:e553bbb89c99a5f8b2ea2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const providers = new GoogleAuthProvider();
const db = getFirestore();

export { auth, providers, db };
