// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs3Fh6Okr1XlGGnZ_bWn4_dZui35uK9Os",
  authDomain: "careerguidancewebapp.firebaseapp.com",
  projectId: "careerguidancewebapp",
  storageBucket: "careerguidancewebapp.firebasestorage.app",
  messagingSenderId: "390740955575",
  appId: "1:390740955575:web:57fb7f520a9bc73c0ed832",
  measurementId: "G-BHSQFQ5WSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);