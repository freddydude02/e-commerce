import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAfW-ygoUkynkhM1uRqiY8fg7F2t9zd30",
    authDomain: "commerce-34018.firebaseapp.com",
    projectId: "commerce-34018",
    storageBucket: "commerce-34018.appspot.com",
    messagingSenderId: "878471161406",
    appId: "1:878471161406:web:6493c89681232de253d36f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
