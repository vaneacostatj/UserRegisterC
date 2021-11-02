import { getAuth, onAuthStateChanged } from "firebase/auth";

export const isAuthenticate = () => stateUser;

function stateUser(){
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {    
    localStorage.setItem('user', JSON.stringify(this.state))
  } 
});
}  





