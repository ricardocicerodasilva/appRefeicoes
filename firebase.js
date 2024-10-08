import {initializeApp} from "firebase/app";
import{getFirestore}from "firebase/firestore";

const firebaseConfig ={
    apiKey: "AIzaSyCyEbrjbjFhwTHxTJ6IloogJTzarABJ7KQ",
    authDomain: "apprefeicaoricardo.firebaseapp.com",
    projectId: "apprefeicaoricardo",
    storageBucket: "apprefeicaoricardo.appspot.com",
    messagingSenderId: "1092985432931",
    appId: "1:1092985432931:web:b735eb2e817318acbf8156"
}

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);