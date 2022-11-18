
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCP3Sy9lUBnOFRfwjOx2BECeVL583uAnt4",
  authDomain: "animlot-cd0bd.firebaseapp.com",
  projectId: "animlot-cd0bd",
  storageBucket: "animlot-cd0bd.appspot.com",
  messagingSenderId: "563255537506",
  appId: "1:563255537506:web:fc868b56b970238277063b",
  measurementId: "G-HVR74VP1WY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;