// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIr7KXhWVDT9BECWc55RRN3H-s2iRkaTw",
  authDomain: "firestore-f2fe2.firebaseapp.com",
  databaseURL: "https://firestore-f2fe2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "firestore-f2fe2",
  storageBucket: "firestore-f2fe2.appspot.com",
  messagingSenderId: "825256626923",
  appId: "1:825256626923:web:3ee62e48cf0421fcec0cae",
  measurementId: "G-RPTB49K6Y6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const cong = initializeApp(firebaseConfig)

export default cong;