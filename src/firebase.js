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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Initialize Realtime Database and export it
export const database = getDatabase(app);

// Initialize Firestore and export it (for future use)
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);
