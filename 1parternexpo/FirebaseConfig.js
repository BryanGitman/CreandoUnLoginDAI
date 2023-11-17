// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfigUser = {
  apiKey: "AIzaSyD_REV_DzFGtNOn3bws7VrEqaOqWyQzvVw",
  authDomain: "perfildemiapp.firebaseapp.com",
  projectId: "perfildemiapp",
  storageBucket: "perfildemiapp.appspot.com",
  messagingSenderId: "239217514029",
  appId: "1:239217514029:web:f70325aee8605427998aa4",
  measurementId: "G-SDMM3P0T8C"
};

const firebaseConfigArt = {
  apiKey: "AIzaSyCIHle1yhoVK7DJs4DKzDfNQdbTtsRecac",
  authDomain: "empneo-5ae24.firebaseapp.com",
  projectId: "empneo-5ae24",
  storageBucket: "empneo-5ae24.appspot.com",
  messagingSenderId: "804924674995",
  appId: "1:804924674995:web:b1e4da691a433d37cc71c6",
  measurementId: "G-KNZED68WC2"
};

// Initialize Firebase
const appUser = initializeApp(firebaseConfigUser, 'appUser');
const authUser = getAuth(appUser);

const appArt = initializeApp(firebaseConfigArt, 'appArt');
const authArt = getAuth(appArt);

export {appUser, appArt};