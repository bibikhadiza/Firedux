import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDPbX2jPCxIZ7OC9tvH-VUMHt0byM3ly_c",
  authDomain: "firedux-3aa79.firebaseapp.com",
  databaseURL: "https://firedux-3aa79.firebaseio.com",
  storageBucket: "firedux-3aa79.appspot.com",
  messagingSenderId: "1010405399382"
};
firebase.initializeApp(firebaseConfig);

const C = {
  // Auth actions
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGOUT: 'LOGOUT',
  LISTENING_TO_AUTH: 'LISTENING_TO_AUTH',

  // Auth states
  LOGGED_IN: 'LOGGED_IN',
  LOGGING_IN: 'LOGGING_IN',
  LOGGED_OUT: 'LOGGED_OUT',

  // MISC
  FIREBASE: firebase,
};

export default C;
