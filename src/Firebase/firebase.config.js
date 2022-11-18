// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqS4O5OBbTZbhQoyqHPXrEtpkrghTkahk",
  authDomain: "doctors-portal-225df.firebaseapp.com",
  projectId: "doctors-portal-225df",
  storageBucket: "doctors-portal-225df.appspot.com",
  messagingSenderId: "271246703721",
  appId: "1:271246703721:web:f55a9d50a3e79c377e36f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;