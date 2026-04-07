import { initializeApp } from "firebase/app";
import { initializeFirestore, memoryLocalCache } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVppMy8Lx1kxxcRo4d0hFC8DgRLw0MUKY", 
  authDomain: "project-482075490159.firebaseapp.com",
  projectId: "project-482075490159",
  storageBucket: "project-482075490159.firebasestorage.app",
  messagingSenderId: "482075490159",
  appId: "1:482075490159:web:404929f2f9f8f5b9869a9a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  localCache: memoryLocalCache()
});
