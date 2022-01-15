import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCAp78g9a-bokNWOZw2QrfDQkW3jnrMnTo",
    authDomain: "unichat-325f0.firebaseapp.com",
    projectId: "unichat-325f0",
    storageBucket: "unichat-325f0.appspot.com",
    messagingSenderId: "832931989191",
    appId: "1:832931989191:web:9756ec1ae53c13403060e2"
}).auth();