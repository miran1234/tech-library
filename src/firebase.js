import { initializeApp } from "firebase/app";
import { initializeFirestore, fb_initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVppMy8Lx1kxxcRo4d0hFC8DgRLw0MUKY",
  authDomain: "mywebproject-ddb36.firebaseapp.com",
  projectId: "mywebproject-ddb36",
  storageBucket: "mywebproject-ddb36.firebasestorage.app",
  messagingSenderId: "482075490159",
  appId: "1:482075490159:web:404929f2f9f8f5b9869a9a",
  measurementId: "G-XV6WB5VCZG"
};

const app = initializeApp(firebaseConfig);

// هذا السطر هو السحر الذي سيتخطى حظر الشبكة
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});
