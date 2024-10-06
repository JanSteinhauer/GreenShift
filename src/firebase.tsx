// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxUuSInvsOaRP6PBWaBDii0PfdMkUDwzQ",
  authDomain: "greenshiftai.firebaseapp.com",
  projectId: "greenshiftai",
  storageBucket: "greenshiftai.appspot.com",
  messagingSenderId: "275750311898",
  appId: "1:275750311898:web:008e679079d7a3624652e3",
  measurementId: "G-TY8SXP5XWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);