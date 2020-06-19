import * as firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
//   appId:process.env.REACT_APP_FIREBASE_API_ID
// });

const app = firebase.initializeApp({
  apiKey: "AIzaSyDy_AqKiGUSsQQKVngE-A6vXTdy6InAX4M",
  authDomain: "endless-b363c.firebaseapp.com",
  databaseURL: "https://endless-b363c.firebaseio.com",
  projectId: "endless-b363c",
  storageBucket: "endless-b363c.appspot.com",
  messagingSenderId: "987581517545",
  appId: "1:987581517545:web:a7b935e53429e18720ea78",
  measurementId: "G-2VKB2PXNYB"
});

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new  firebase.auth.TwitterAuthProvider();
export const githubProvider = new  firebase.auth.GithubAuthProvider();
export const db =  firebase.firestore();

export default app;
