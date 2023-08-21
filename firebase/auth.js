import firebaseApp from "./config";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export default async function signIn() {
  let result;
  let error;
  
  try {
    result = await signInWithPopup(auth, provider);
  } catch (e) {
    error = e;
  }

  return { result, error };
};