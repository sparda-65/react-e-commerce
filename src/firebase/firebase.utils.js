import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
 
const config={
    apiKey: "AIzaSyCbvfXVRY7t98bGDfw7T_zHeled-ml6oaQ",
    authDomain: "crwn-db-1f077.firebaseapp.com",
    projectId: "crwn-db-1f077",
    storageBucket: "crwn-db-1f077.appspot.com",
    messagingSenderId: "1032636884273",
    appId: "1:1032636884273:web:aeee871f199762cd88fc10",
    measurementId: "G-3RSRY92ZDY"
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;