import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBgHAtGqCR0t825USsquPK3tfzp8tbdnRA',
  authDomain: 'crwn-db-e99fc.firebaseapp.com',
  projectId: 'crwn-db-e99fc',
  storageBucket: 'crwn-db-e99fc.appspot.com',
  messagingSenderId: '237391951609',
  appId: '1:237391951609:web:40f1acf29b78b345e21428',
  measurementId: 'G-39XG8H0NXC',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
