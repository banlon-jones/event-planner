import {fbauth} from "../configs/firebaseConfig.js";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";

export const signIn = async (email, password) => {
  return await signInWithEmailAndPassword(fbauth, email, password);
}

export const signUp = async (email, password) => {
  return await createUserWithEmailAndPassword(fbauth, email, password);
}

export const logout = async () => {
  return await signOut(fbauth);
}
