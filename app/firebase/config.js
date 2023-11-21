// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzyei6_0rlytq_0BcsnclKJDvxY2AoT3M",
  authDomain: "limitnext-29360.firebaseapp.com",
  projectId: "limitnext-29360",
  storageBucket: "limitnext-29360.appspot.com",
  messagingSenderId: "679936825989",
  appId: "1:679936825989:web:7257a7dcd2cfefacd867ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
