

//  localStorage.setItem('userAct', JSON.stringify(this.state))

import { getAuth, onAuthStateChanged } from "firebase/auth";

  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    sessionStorage.setItem('userAct', JSON.stringify(uid));
    
  } 
});







