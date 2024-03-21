import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg3CMNuVnrJJ00gRTvI8hPoVfEkgSPu8g",
  authDomain: "task-monitor-112f4.firebaseapp.com",
  projectId: "task-monitor-112f4",
  storageBucket: "task-monitor-112f4.appspot.com",
  messagingSenderId: "898712877305",
  appId: "1:898712877305:web:8cb4e2fb970b466bc1ca28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export default auth;