// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAFX30NxNi3J5KhUrmLCcG1YxxtSkr51Y0",
  authDomain: "clothing-db-16cd2.firebaseapp.com",
  projectId: "clothing-db-16cd2",
  storageBucket: "clothing-db-16cd2.appspot.com",
  messagingSenderId: "290356259420",
  appId: "1:290356259420:web:d74cf88b0a2efac4ca1499",
  measurementId: "G-QR9SY3PPFH"
};

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  export const signInWithGoogle = () => {
      signInWithPopup(auth, provider)
      .then((result) => {
            console.log(result);
      }).catch((error) => {
          console.log(error);
      })
  }
 
  
