import './App.css';
import Navbar from "./components/Navbar";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { actionTypes } from "./Reducer";
import { auth } from "./components/firebase";
import { PublicRoutes } from "./routes/PublicRoutes";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { isAuthenticate } from "./routes/auth/authentication";

function App(props) {

  const [{user}, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if (authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      } else {
        sessionStorage.setItem('userAct', 'null');
      }
  
    }) 
  },[])

  var isAuth = sessionStorage.getItem('userAct');
  return (      
    <div className="App">    
      <Navbar/> 
      {
        (isAuth !== "null" )
        ? <PrivateRoutes props={props}/>
        : <PublicRoutes />
      }      
    </div>
  );
}

export default App;
