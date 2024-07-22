// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';;

const firebaseConfig = {
  apiKey: "AIzaSyDBCICUY2zoaYogxCbBTn8lTWrKXVwrtTk",
  authDomain: "real-steel-7e3fc.firebaseapp.com",
  projectId: "real-steel-7e3fc",
  storageBucket: "real-steel-7e3fc.appspot.com",
  messagingSenderId: "985093063519",
  appId: "1:985093063519:web:fa48de4fbf5e0a73066cea",
  measurementId: "G-NYVJTDD447",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};