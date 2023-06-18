// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v9.22.2 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6LaXPq9AjINtew6zpIDjtJWnjAw6o82U",
  authDomain: "goielts-f971d.firebaseapp.com",
  projectId: "goielts-f971d",
  storageBucket: "goielts-f971d.appspot.com",
  messagingSenderId: "157569705591",
  appId: "1:157569705591:web:951fef063b7712c22d4872",
  measurementId: "G-JZ7KGLZYDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
