// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore, doc, getDoc, collection, addDoc, getDocs, query, where} from "firebase/firestore";



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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const docRef = doc(db, "users", `${userAuth.uid}`);
    
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
    
     
      try {
        await set(ref(docRef), {
          displayName: "TEST"
        })
        console.log("HERE");
       
      } catch (error) {
        console.log("ERROR", error.message);
      }
    }
    return docRef;
  }

  
  

  const provider = new GoogleAuthProvider();

  export const signInWithGoogle = () => {
      signInWithPopup(auth, provider)
      .then((result) => {
            console.log(result);
      }).catch((error) => {
          console.log(error);
      })
  }
 
  
  
  const db = getFirestore();