import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCB5BPqZEyGBNoWbFxCdWpj7fu_nkrIgQo",
    authDomain: "property-ticket.firebaseapp.com",
    projectId: "property-ticket",
    storageBucket: "property-ticket.appspot.com",
    messagingSenderId: "746143792062",
    appId: "1:746143792062:web:c951cebd033b6b2c0e17ef",
    measurementId: "G-NSRQ2XGR1D"
};
firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
const db=firebase.firestore();
export{auth,db}