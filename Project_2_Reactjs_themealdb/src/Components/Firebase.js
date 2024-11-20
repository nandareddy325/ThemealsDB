import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import  initializeApp  from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAc0IWMjR3-hPr3-kdRk0ocJ5khJySiBmc",
    authDomain: "nreactjs-26af8.firebaseapp.com",
    projectId: "nreactjs-26af8",
    storageBucket: "nreactjs-26af8.appspot.com",
    messagingSenderId: "602309865040",
    appId: "1:602309865040:web:6bed0fcd017e1d9b2b6b55",
    measurementId: "G-8LJE09GR53"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {auth,db}