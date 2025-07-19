import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';   // Realtime Database import
import { getFirestore } from 'firebase/firestore'; // Firestore import
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
 apiKey: "AIzaSyBTbiBzOC2YIjkguRmUYxxZyMmew3ZPPV8",
  authDomain: "taskapp-76f3c.firebaseapp.com",
  databaseURL: "https://taskapp-76f3c-default-rtdb.firebaseio.com",
  projectId: "taskapp-76f3c",
  storageBucket: "taskapp-76f3c.firebasestorage.app",
  messagingSenderId: "65233843809",
  appId: "1:65233843809:web:6126e7c767ef2c1a341c20",
  measurementId: "G-QNHBDG9FJ9"
};

let auth = null;
let provider = null;
let database = null;
let db = null;
let storage = null;

try {
  console.log("Initializing Firebase...");
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  console.log("Firebase app initialized successfully");

  // Initialize Firebase services
  auth = getAuth(app);
  provider = new GoogleAuthProvider();

  // Initialize Realtime Database with error handling
  try {
    database = getDatabase(app);
    console.log("Realtime Database initialized");
  } catch (dbError) {
    console.warn("Realtime Database initialization failed:", dbError);
    database = null;
  }

  // Initialize Firestore with error handling
  try {
    db = getFirestore(app);
    console.log("Firestore initialized");
  } catch (fsError) {
    console.warn("Firestore initialization failed:", fsError);
    db = null;
  }

  // Initialize Storage
  storage = getStorage(app);
  console.log("Firebase Storage initialized");
  
} catch (error) {
  console.error("Failed to initialize Firebase:", error);
  
  // Keep null values as fallbacks
  auth = null;
  provider = null;
  database = null;
  db = null;
  storage = null;
}

export { auth, provider, database, db, storage };
