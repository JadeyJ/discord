import firebase from "firebase";

const firebaseConfig = {
    apiKey: "API KEY",
    authDomain: "AUTH DOMAIN",
    projectId: "PROJECT ID",
    storageBucket: "STORAGE BUCKET",
    messagingSenderId: "MESSEGING SENDER ID",
    appId: "APP ID",
    measurementId: "MEASUREMENT ID"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
