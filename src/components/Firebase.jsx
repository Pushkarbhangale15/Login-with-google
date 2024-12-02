// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBnRba591bEuQDXigpoaPHvrNu4RE2N5A",
  authDomain: "login1-ac13b.firebaseapp.com",
  projectId: "login1-ac13b",
  storageBucket: "login1-ac13b.firebasestorage.app",
  messagingSenderId: "343464895409",
  appId: "1:343464895409:web:a7f145f6b8d220ae105390",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
