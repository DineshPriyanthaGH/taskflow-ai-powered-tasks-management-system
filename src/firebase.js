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

console.log("Initializing Firebase...");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized successfully");

// Initialize Firebase services
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Realtime Database (may fail if not enabled)
let database = null;
try {
  database = getDatabase(app);
  console.log("Realtime Database initialized");
} catch (dbError) {
  console.warn("Realtime Database initialization failed:", dbError);
  console.warn("Please enable Realtime Database in Firebase Console");
}

// Initialize Firestore (may fail if not enabled)  
let db = null;
try {
  db = getFirestore(app);
  console.log("Firestore initialized");
} catch (fsError) {
  console.warn("Firestore initialization failed:", fsError);
}

// Initialize Storage
const storage = getStorage(app);
console.log("Firebase Storage initialized");

export { auth, provider, database, db, storage };
