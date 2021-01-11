import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCsxTG_kb8EcJ7zyCz9pvEFZT8dB2rVQCQ',
  authDomain: 'journal-app-herrera.firebaseapp.com',
  projectId: 'journal-app-herrera',
  storageBucket: 'journal-app-herrera.appspot.com',
  messagingSenderId: '160590919866',
  appId: '1:160590919866:web:08b6fe587db5658148ea83',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { db, googleAuthProvider, firebase };   
