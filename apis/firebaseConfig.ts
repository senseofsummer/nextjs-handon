import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC0-1nOaEwUMiBB7GR0o-_aGvPgeXiObMY",
    authDomain: "handon-f105b.firebaseapp.com",
    projectId: "handon-f105b",
    storageBucket: "handon-f105b.appspot.com",
    messagingSenderId: "321226971685",
    appId: "1:321226971685:web:4e2638fd6374bb8db7bdcc",
    measurementId: "G-0F85RHEHCS"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
