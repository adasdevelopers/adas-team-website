import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJiMxedmef79J8Q3r0y-i6ejM5Q0DKDCA",
  authDomain: "adas-website-345a1.firebaseapp.com",
  projectId: "adas-website-345a1",
  storageBucket: "adas-website-345a1.appspot.com",
  messagingSenderId: "618207126821",
  appId: "1:618207126821:web:e98f773948b792419a66cc",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
//
// const userRef = firestore.doc(`users/${user.uid}`);
// const snapshot = await userRef.get();
