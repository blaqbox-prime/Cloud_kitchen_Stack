// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const {getStorage} = require('firebase/storage');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP1Y6aPQCQM9Usz3LXEhKfHR7AuyYFvQI",
  authDomain: "cloud-kitchen-storage.firebaseapp.com",
  projectId: "cloud-kitchen-storage",
  storageBucket: "cloud-kitchen-storage.appspot.com",
  messagingSenderId: "422851760642",
  appId: "1:422851760642:web:e6b21013be0cf361efcd1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

module.exports = {storage};