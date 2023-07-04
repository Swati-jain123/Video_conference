// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection,getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKKwcx4x_H6IGWA8rOIpAe_0EMP6pYcQM",
  authDomain: "video-chat-4cb92.firebaseapp.com",
  projectId: "video-chat-4cb92",
  storageBucket: "video-chat-4cb92.appspot.com",
  messagingSenderId: "219159012379",
  appId: "1:219159012379:web:ce03cc9b90e7940d8fc4be",
  measurementId: "G-W0K6ZCJLDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app)
export const firebaseDB=getFirestore(app);

export const userRef=collection(firebaseDB,"users");
export const meetingsRef=collection(firebaseDB,"meetings");