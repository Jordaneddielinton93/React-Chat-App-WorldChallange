import firebase from "firebase";
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // 
  // Initialize Firebase
 const fireDb = firebase.initializeApp(firebaseConfig);
 export default fireDb.database().ref()
