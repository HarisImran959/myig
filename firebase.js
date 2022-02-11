
import { setUserId } from 'firebase/analytics';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, setUserProperties } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyBuh5jfwkKCB2sLCT0bm8DrFJ4So3RdkIM",
    authDomain: "myig-e5ed6.firebaseapp.com",
  
    projectId: "myig-e5ed6",
    storageBucket: "myig-e5ed6.appspot.com",
    messagingSenderId: "40110900927",
    appId: "1:40110900927:web:9922c0cf8a452d83ebe80a",
    measurementId: "G-D6FD33SL2Z"
  };
  const app= initializeApp(firebaseConfig);
const db = app.firestore();
const auth = getAuth();
const storage = getStorage(app);
export default { app, auth, db, storage}