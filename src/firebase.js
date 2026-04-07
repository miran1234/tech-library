import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCVppMy8Lx1kxxcRo4d0hFC8DgRLw0MUKY",
  authDomain: "project-482075490159.firebaseapp.com",
  databaseURL: "https://project-482075490159-default-rtdb.firebaseio.com/",
  projectId: "project-482075490159",
  storageBucket: "project-482075490159.firebasestorage.app",
  messagingSenderId: "482075490159",
  appId: "1:482075490159:web:404929f2f9f8f5b9869a9a"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set };
