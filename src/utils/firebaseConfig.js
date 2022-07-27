// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/farestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7__dBPASTLUpAt8xZcjSi-GuTzERx_nw",
  authDomain: "e-commer-style.firebaseapp.com",
  projectId: "e-commer-style",
  storageBucket: "e-commer-style.appspot.com",
  messagingSenderId: "504703100135",
  appId: "1:504703100135:web:6463397987ac9cf3bfee42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db