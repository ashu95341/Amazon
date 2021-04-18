// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCnTTyH9H8ZoWyasF7N-K_UVAvqhL82uFo",
    authDomain: "challenge-77515.firebaseapp.com",
    databaseURL: "https://challenge-77515-default-rtdb.firebaseio.com/",
    projectId: "challenge-77515",

    storageBucket: "challenge-77515.appspot.com",
    messagingSenderId: "743022192913",
    appId: "1:743022192913:web:ade38ccbf5c9f505c804b0",
    measurementId: "G-C9RYT2DT0M"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};