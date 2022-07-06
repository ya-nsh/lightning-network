import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC6liA_ea0gijhNU4aPE_DKGkayoIu5_sI',
  authDomain: 'lightning-network-de4ca.firebaseapp.com',
  projectId: 'lightning-network-de4ca',
  storageBucket: 'lightning-network-de4ca.appspot.com',
  messagingSenderId: '491302732007',
  appId: '1:491302732007:web:1b77d710ee7fdff1f66242'
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
