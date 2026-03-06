import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCXHA7M23K4a5RDPunt4Bs1I8KSxNSosK0",
  authDomain: "ai-flyer-course.firebaseapp.com",
  projectId: "ai-flyer-course",
  storageBucket: "ai-flyer-course.firebasestorage.app",
  messagingSenderId: "572875617842",
  appId: "1:572875617842:web:7c16c7571b9e4b833fae2b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };