//revisa bien la version antes de utilizar esto como referencia 
//siempre ten en cuenta las versiones y documentación del firebase

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';


const firebaseConfig = {
  apiKey: "AIzaSyDF18eUtG6g8m7K5LC1juzo9kDmQx8PCXQ",
  authDomain: "condudb-4b5ae.firebaseapp.com",
  projectId: "condudb-4b5ae",
  storageBucket: "condudb-4b5ae.appspot.com",
  messagingSenderId: "1043950141458",
  appId: "1:1043950141458:web:cfdb042d40464178a418cb"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const data = firebaseApp.firestore();

export { auth };
export { data };
