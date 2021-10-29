//revisa bien la version antes de utilizar esto como referencia 
//siempre ten en cuenta las versiones y documentación del firebase

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';


const firebaseConfig = {
    apiKey: "AIzaSyCLtCFR7XpVsBMcLeD00Iybp1DTAzNFTrs",
    authDomain: "coducimosescuela.firebaseapp.com",
    projectId: "coducimosescuela",
    storageBucket: "coducimosescuela.appspot.com",
    messagingSenderId: "716429173545",
    appId: "1:716429173545:web:bfb9213f7d4a5346fb4d38"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const data = firebaseApp.firestore();

export { auth };
export { data };
