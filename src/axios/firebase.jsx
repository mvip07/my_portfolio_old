import firebase from 'firebase/compat/app';
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDazlPBp8VALQZzJB762lkYciKGn2Z4aeQ",
    authDomain: "my-portfolio-a8501.firebaseapp.com",
    projectId: "my-portfolio-a8501",
    storageBucket: "my-portfolio-a8501.appspot.com",
    messagingSenderId: "507254444042",
    appId: "1:507254444042:web:2477f27c8e9ba57a290ff3",
    measurementId: "G-P517DE6KG1"
  };

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage();

export { firebase, storage }