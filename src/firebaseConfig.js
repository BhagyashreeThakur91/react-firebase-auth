import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBulI2LDLROM9DYjD-2NxgirSu2e8Q6zug",
    authDomain: "react-firebase-auth-5a744.firebaseapp.com",
    projectId: "react-firebase-auth-5a744",
    storageBucket: "react-firebase-auth-5a744.appspot.com",
    messagingSenderId: "826328533753",
    appId: "1:826328533753:web:c6db00d54e084d74093028",
    measurementId: "G-QWXYYXJG0K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;