import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = require('../configs/firebase');

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
