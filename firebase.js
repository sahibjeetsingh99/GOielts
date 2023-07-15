// Import the functions you need from the SDKs 
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase ,ref, set } from 'firebase/database';
import {getFirestore} from 'firebase/firestore'
//import firebase from 'firebase/app';
//import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyBr7vzz3cOG_nERnr_MWP-fACtx3EjpMbA",
  authDomain: "goielts-de65a.firebaseapp.com",
  databaseURL: "https://goielts-de65a-default-rtdb.firebaseio.com",
  projectId: "goielts-de65a",
  storageBucket: "goielts-de65a.appspot.com",
  messagingSenderId: "569148549935",
  appId: "1:569148549935:web:ceb3c9b4eb4421d2ec0fda",
  measurementId: "G-NB9Z4VNGCF"
};

 //firebase.initializeApp(firebaseConfig)

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const db = getFirestore(app);
//const db = firebase.firestore();



export { app, auth, database,db,firebase };
