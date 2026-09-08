// Firebase-Konfiguration für das Jassturnier-Projekt (separate DB von supporter-fcek)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRWY2WCAPe9bMeGUwjdUr4FMxqYas84z8",
  authDomain: "jassturnier-fcek.firebaseapp.com",
  projectId: "jassturnier-fcek",
  storageBucket: "jassturnier-fcek.firebasestorage.app",
  messagingSenderId: "497328817562",
  appId: "1:497328817562:web:24e031fe705e158e09e623"
};

export const app = initializeApp(firebaseConfig);
