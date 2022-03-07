// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA_mjKM2PknZqa6W_kuk2H6nqYZkktbphA",
  authDomain: "epakiosco.firebaseapp.com",
  projectId: "epakiosco",
  storageBucket: "epakiosco.appspot.com",
  messagingSenderId: "715169549148",
  appId: "1:715169549148:web:0721b01259444a2e634f99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
export const firestoreDb = getFirestore(app)