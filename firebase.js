// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASIrpyl-6slleQ9hmyxFLYv-MwcQLC4fQ",
  authDomain: "medium-clone-nextjs-78824.firebaseapp.com",
  projectId: "medium-clone-nextjs-78824",
  storageBucket: "medium-clone-nextjs-78824.appspot.com",
  messagingSenderId: "20199729686",
  appId: "1:20199729686:web:d1118ef7f8de7afd2fe337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { db, auth, provider }