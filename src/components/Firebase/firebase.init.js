// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJrM3be7aoJsG-Q-8tk1CCxevSNRmF8zk",
    authDomain: "fresh-grocery-c4276.firebaseapp.com",
    projectId: "fresh-grocery-c4276",
    storageBucket: "fresh-grocery-c4276.appspot.com",
    messagingSenderId: "103424650420",
    appId: "1:103424650420:web:c23535122a2c713127bbe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;