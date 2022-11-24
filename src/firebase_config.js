// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8N1IHD7FAbAwC8qyapAlB00u5u88AxF0",
  authDomain: "react-placement.firebaseapp.com",
  projectId: "react-placement",
  storageBucket: "react-placement.appspot.com",
  messagingSenderId: "292118116282",
  appId: "1:292118116282:web:9b3ab5e3dbd14ebbf10f83",
  measurementId: "G-R32Y6W24M9"
};          


// Initialize Firebase
// export const firebaseApp = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


