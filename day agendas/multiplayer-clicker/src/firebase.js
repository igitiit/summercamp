// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBerWVnFT6qNmkprKWkHi1GgWjs6GIOmBc",
  authDomain: "node1-18159.firebaseapp.com",
  databaseURL: "https://node1-18159-default-rtdb.firebaseio.com",
  projectId: "node1-18159",
  storageBucket: "node1-18159.appspot.com",
  messagingSenderId: "1077201595247",
  appId: "1:1077201595247:web:6edc483e81dbb80d02969a",
  measurementId: "G-HKBZY9ZTDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Analytics
const analytics = getAnalytics(app);

export { database, analytics };