// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4jn0pZf8tiyEIY4wGQqFrVF5w7AAyHaQ",
  authDomain: "ema-john-simple-8e65c.firebaseapp.com",
  projectId: "ema-john-simple-8e65c",
  storageBucket: "ema-john-simple-8e65c.appspot.com",
  messagingSenderId: "267144601931",
  appId: "1:267144601931:web:951b2fe2b598893ee7c8ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
