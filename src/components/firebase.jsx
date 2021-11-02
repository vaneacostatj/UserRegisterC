//revisa bien la version antes de utilizar esto como referencia 
//siempre ten en cuenta las versiones y documentación del firebase

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';


const firebaseConfig = {
  apiKey: "AIzaSyBnmP8gVlVb0ByIsu_LAp4CDk5bfv-21wA",
  authDomain: "coducimosescuela-fcfc4.firebaseapp.com",
  projectId: "coducimosescuela-fcfc4",
  storageBucket: "coducimosescuela-fcfc4.appspot.com",
  messagingSenderId: "377717975748",
  appId: "1:377717975748:web:2824a4b27ea395efdbf791"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const data = firebaseApp.firestore();

export { auth };
export { data };
