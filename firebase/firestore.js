import firebaseApp from "./config";
import { getFirestore } from "firebase/firestore";

export default function firestore() {
  return getFirestore(firebaseApp);
};