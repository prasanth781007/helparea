/* 
   HELP AREA – Official Firebase Configuration
   --------------------------------------------
   This file initializes Firebase for the entire platform.
   Used by: index.html, login.html, and admin.html.
*/

const firebaseConfig = {
    apiKey: "AIzaSyDQiDUuzQ_lh5JWNUK06Yajs_tYsRbLGvI",
    authDomain: "protfolio-34bfe.firebaseapp.com",
    projectId: "protfolio-34bfe",
    storageBucket: "protfolio-34bfe.firebasestorage.app",
    messagingSenderId: "794523443650",
    appId: "1:794523443650:web:9a82ac2dbbbbc115a4f65b"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
