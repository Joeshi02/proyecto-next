import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
import { getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCzyei6_0rlytq_0BcsnclKJDvxY2AoT3M",
  authDomain: "limitnext-29360.firebaseapp.com",
  projectId: "limitnext-29360",
  storageBucket: "limitnext-29360.appspot.com",
  messagingSenderId: "679936825989",
  appId: "1:679936825989:web:7257a7dcd2cfefacd867ec"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()