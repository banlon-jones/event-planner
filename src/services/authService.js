import {fbauth} from "../configs/firebaseConfig.js";

export const signIn = async (email, password) => {
  return await fbauth.signInWithEmailAndPassword(email, password);
}

export const signUp = async (email, password) => {
  return await fbauth.createUserWithEmailAndPassword(email, password);
}

export const signOut = async () => {
  return await fbauth.signOut();
}
