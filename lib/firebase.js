'use strict';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDgN9mkMr-d_T6w6Meov0J8hB57sapxjCc",
    authDomain: "bootcamp-jobs.firebaseapp.com",
    databaseURL: "https://bootcamp-jobs.firebaseio.com",
    storageBucket: "bootcamp-jobs.appspot.com",
    messagingSenderId: "684556775396"
  };

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const reference = () => firebase.database().ref(`users/${auth.currentUser.uid}`);
