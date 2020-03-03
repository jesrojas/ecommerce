import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAtiIZ2M6F77FZwLdRdneO96XVNlZ8_1CU",
  authDomain: "e-commerce-9a996.firebaseapp.com",
  databaseURL: "https://e-commerce-9a996.firebaseio.com",
  projectId: "e-commerce-9a996",
  storageBucket: "e-commerce-9a996.appspot.com",
  messagingSenderId: "142409632928",
  appId: "1:142409632928:web:28b7bf956932f41e508dc5",
  measurementId: "G-W131PTJ80Z"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){return;}
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;