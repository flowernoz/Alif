import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBE0KlnO5dBHZSmunjItzSKcMCIex0kEK4",
  authDomain: "alif-90a88.firebaseapp.com",
  projectId: "alif-90a88",
  storageBucket: "alif-90a88.appspot.com",
  messagingSenderId: "544708178506",
  appId: "1:544708178506:web:5feadbadfab8ae1bbfecb3",
  measurementId: "G-WS5HYXP5FR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth, };