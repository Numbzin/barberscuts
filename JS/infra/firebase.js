// Import the functions you need from the SDKs you need
import { firebaseConfig } from "./firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app);
export { collection, addDoc, query, where, getDocs, setDoc };
