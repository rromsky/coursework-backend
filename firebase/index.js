const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6VlYdWv1ItXplmlkBdhYprF02j3d9XAQ",
  authDomain: "megogo-ref-bot.firebaseapp.com",
  projectId: "megogo-ref-bot",
  storageBucket: "megogo-ref-bot.appspot.com",
  messagingSenderId: "49819634668",
  appId: "1:49819634668:web:d6f69e6a46c1b69afb4ec9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const store = getFirestore(app);
module.exports = {
  store,
};
