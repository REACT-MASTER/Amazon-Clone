import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB61DQ9-oIXH-M2vtIu5jCFKaLL4ZKq2nA",
  authDomain: "challenge-bfb4b.firebaseapp.com",
  projectId: "challenge-bfb4b",
  storageBucket: "challenge-bfb4b.appspot.com",
  messagingSenderId: "809731524137",
  appId: "1:809731524137:web:c170efcf0633d23be83e38",
  measurementId: "G-SRH49YG0W3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
