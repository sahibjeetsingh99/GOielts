import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: '<YOUR_API_KEY>',
  authDomain: '<YOUR_AUTH_DOMAIN>',
  databaseURL: 'https://goielts-a869f-default-rtdb.firebaseio.com/',
  projectId: 'goielts-a869f',
  storageBucket: '<YOUR_STORAGE_BUCKET>',
  messagingSenderId: '<YOUR_MESSAGING_SENDER_ID>',
  appId: '<YOUR_APP_ID>',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
