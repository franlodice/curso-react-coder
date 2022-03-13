// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

/*const firebaseConfig = {
  apiKey: "AIzaSyA_mjKM2PknZqa6W_kuk2H6nqYZkktbphA",
  authDomain: "epakiosco.firebaseapp.com",
  projectId: "epakiosco",
  storageBucket: "epakiosco.appspot.com",
  messagingSenderId: "715169549148",
  appId: "1:715169549148:web:0721b01259444a2e634f99"
};*/

const firebaseConfig = {
  apiKey: process.env.REACT_APP_ApiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_AppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
export const firestoreDb = getFirestore(app)