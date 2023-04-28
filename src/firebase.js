// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVSvbBOwAk2BVi_SIzljf-NNgdDnXiirM",
  authDomain: "todo-app-6ab7e.firebaseapp.com",
  projectId: "todo-app-6ab7e",
  storageBucket: "todo-app-6ab7e.appspot.com",
  messagingSenderId: "475091745410",
  appId: "1:475091745410:web:3f2fcd8bb3932405bdd29b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
