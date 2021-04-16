import firebase from 'firebase/app'
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJiMxedmef79J8Q3r0y-i6ejM5Q0DKDCA",
    authDomain: "adas-website-345a1.firebaseapp.com",
    projectId: "adas-website-345a1",
    storageBucket: "adas-website-345a1.appspot.com",
    messagingSenderId: "618207126821",
    appId: "1:618207126821:web:e98f773948b792419a66cc"
};

firebase.initializeApp(firebaseConfig);


    const db = firebase.firestore();
    //
    // const userRef = firestore.doc(`users/${user.uid}`);
    // const snapshot = await userRef.get();

//     let execs = [];
//     let jobs = [];
//     let questions = [];
//     let initiatives = [];

//     db.collection("executives").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => { // doc.data() is never undefined for query doc snapshots


//             execs.push(doc.data());
//             // const execs = doc.data();
//             // console.log(doc.id, " => ", doc.data());
//         });
//     }).catch((error) => {
//         console.log("Error getting documents: ", error);
//     });

//     db.collection("job-postings").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => { // doc.data() is never undefined for query doc snapshots
//             console.log("Data Doc: \t" + doc.data());
//             jobs.push(doc.data());
//             // const execs = doc.data();
//             // console.log(doc.id, " => ", doc.data());
//         });
//     }).catch((error) => {
//         console.log("Error getting documents: ", error);
//     });

//     db.collection("questions").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => { // doc.data() is never undefined for query doc snapshots
//             questions.push(doc.data());
//             // const execs = doc.data();
//             // console.log(doc.id, " => ", doc.data());
//         });
//     }).catch((error) => {
//         console.log("Error getting documents: ", error);
//     });

//     db.collection("initiatives").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => { // doc.data() is never undefined for query doc snapshots
//             initiatives.push(doc.data());
//             // const execs = doc.data();
//             // console.log(doc.id, " => ", doc.data());
//         });
//     }).catch((error) => {
//         console.log("Error getting documents: ", error);
//     });

// }


export default db;
