// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTAbwVLkdfrfCbKSb4U8oXwQLSZr0xDQk",
  authDomain: "event-planner-5be76.firebaseapp.com",
  projectId: "event-planner-5be76",
  storageBucket: "event-planner-5be76.firebasestorage.app",
  messagingSenderId: "158145172654",
  appId: "1:158145172654:web:870a9e99f097944bf4493f"
};

// Initialize Firebase
const fbapp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(fbapp);
export const fbauth = getAuth(fbapp);

