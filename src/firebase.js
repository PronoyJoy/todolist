// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ99T2yunx52uZ2nFbukt8FGIttvJ73a0",
  authDomain: "todolist-d395a.firebaseapp.com",
  projectId: "todolist-d395a",
  storageBucket: "todolist-d395a.appspot.com",
  messagingSenderId: "537873814351",
  appId: "1:537873814351:web:82b47361988c144c1eeb3a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp ;