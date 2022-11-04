// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMtFkHls6jYWE1W7MsgvcOejijnszK34s",
    authDomain: "avalith-project.firebaseapp.com",
    projectId: "avalith-project",
    storageBucket: "avalith-project.appspot.com",
    messagingSenderId: "708689865763",
    appId: "1:708689865763:web:c9dd239de5c233bb9dd596"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
export const auth = getAuth(app);