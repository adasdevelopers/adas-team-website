import firebase from "firebase/app";
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

const db = firebase.firestore();

export default db;
