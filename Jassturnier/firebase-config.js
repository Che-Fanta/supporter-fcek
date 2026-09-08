// Firebase-Konfiguration für das Jassturnier-Projekt (separate DB von supporter-fcek / saisonkarten-tool)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqTFAQTTguIf_ckUsKT927WtM64LIcfGI",
  authDomain: "jassturnier-a1439.firebaseapp.com",
  databaseURL: "https://jassturnier-a1439-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jassturnier-a1439",
  storageBucket: "jassturnier-a1439.firebasestorage.app",
  messagingSenderId: "158099270271",
  appId: "1:158099270271:web:24d4d32322522813ec6d4a"
};

export const app = initializeApp(firebaseConfig);
