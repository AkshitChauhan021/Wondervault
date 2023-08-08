import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB84LOM4OLnjM8XGXRr5mVaQcl2HPA7I_A",
  authDomain: "wondervault-2fa5c.firebaseapp.com",
  projectId: "wondervault-2fa5c",
  storageBucket: "wondervault-2fa5c.appspot.com",
  messagingSenderId: "858082176749",
  appId: "1:858082176749:web:da0cdb118732dfd99f26e4",
  measurementId: "G-P8N53TBLZK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
export default db;