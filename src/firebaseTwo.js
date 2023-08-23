import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAX8vihvhf3GIrLFXpnevQn8ZbUu7GJkWA",
  authDomain: "rebel-design-solutions.firebaseapp.com",
  databaseURL: "https://rebel-design-solutions-default-rtdb.firebaseio.com",
  projectId: "rebel-design-solutions",
  storageBucket: "rebel-design-solutions.appspot.com",
  messagingSenderId: "137022820127",
  appId: "1:137022820127:web:e553bbb89c99a5f8b2ea2a",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
