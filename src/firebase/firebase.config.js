// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_884LLhq_GJA-ClCtk3EEpuXs8PLwqMM",
  authDomain: "edu-event-29a6c.firebaseapp.com",
  projectId: "edu-event-29a6c",
  storageBucket: "edu-event-29a6c.appspot.com",
  messagingSenderId: "449342727642",
  appId: "1:449342727642:web:5c6dc1098373984917cce3",
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth
