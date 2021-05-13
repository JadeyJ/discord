import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBNiAxo1qtDcsVxbhStZpfzy2Qi3skzu94",
    authDomain: "discord-27f46.firebaseapp.com",
    projectId: "discord-27f46",
    storageBucket: "discord-27f46.appspot.com",
    messagingSenderId: "5462701406",
    appId: "1:5462701406:web:012f44f66b85ce98ff4bcf",
    measurementId: "G-7TJV35XJPF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;