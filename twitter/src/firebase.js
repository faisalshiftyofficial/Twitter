
import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRyEe9f2BBnVh7g_524whmAmcpXsnov7Y",
  authDomain: "twitter-5e52e.firebaseapp.com",
  databaseURL: "https://twitter-5e52e-default-rtdb.firebaseio.com",
  projectId: "twitter-5e52e",
  storageBucket: "twitter-5e52e.appspot.com",
  messagingSenderId: "84897528360",
  appId: "1:84897528360:web:67302b778244f39373531d",
  measurementId: "G-X353577YSN"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;