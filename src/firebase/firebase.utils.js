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

export const creatUserProfileDocument= async ( userAuth, additionalData) => {
    if (!userAuth) {
        console.log('userAuth, firebase.utils.js',userAuth);
        return;
    }
    const userRef =firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const creatAt=new Date();

        try{
            await userRef.set({
                displayName,
                email,
                creatAt,
                ...additionalData
            })

        }catch(err){
            console.log('erreur creation user',err.message);
        }
    }
    return(userRef);
}

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;