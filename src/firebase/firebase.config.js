// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGcqHMK4amz4vbfs5_USS3tJbFSDf1qgo",
  authDomain: "tourist-project-24e16.firebaseapp.com",
  projectId: "tourist-project-24e16",
  storageBucket: "tourist-project-24e16.appspot.com",
  messagingSenderId: "679109956123",
  appId: "1:679109956123:web:7e6caa4fe64dc4778f5ebe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)