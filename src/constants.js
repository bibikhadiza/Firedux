import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDPbX2jPCxIZ7OC9tvH-VUMHt0byM3ly_c",
  authDomain: "firedux-3aa79.firebaseapp.com",
  databaseURL: "https://firedux-3aa79.firebaseio.com",
  storageBucket: "firedux-3aa79.appspot.com",
  messagingSenderId: "1010405399382"
};
firebase.initializeApp(firebaseConfig);

export default {
  FIREBASE: firebase,
};
