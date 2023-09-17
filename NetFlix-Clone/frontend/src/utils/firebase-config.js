import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA842xkmin79mTYYmXdxMRR7jwCLa2Bifc",
  authDomain: "fsd-netflix-clone.firebaseapp.com",
  projectId: "fsd-netflix-clone",
  storageBucket: "fsd-netflix-clone.appspot.com",
  messagingSenderId: "726485702846",
  appId: "1:726485702846:web:73cd15cfad7d636b75e6ef",
  measurementId: "G-8VMXJCPJNZ"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
