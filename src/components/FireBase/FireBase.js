import firebase from "firebase";
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDbT30g0ywxW3Vj46avM7e2PoA-hn1zKZc",
    authDomain: "chatappchallange.firebaseapp.com",
    databaseURL: "https://chatappchallange-default-rtdb.firebaseio.com",
    projectId: "chatappchallange",
    storageBucket: "chatappchallange.appspot.com",
    messagingSenderId: "800661480201",
    appId: "1:800661480201:web:17fa7e34571ece5a1769d8",
    measurementId: "G-8HGS6NB879"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
 export default fire
