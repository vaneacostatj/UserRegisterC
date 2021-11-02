import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../Reducer';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
  const [{user}, dispatch] = useStateValue();
  const history = useHistory();
 

  const salir = () =>{
    if (user){
      auth.signOut();
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      history.push("/");
    }
  }
  let [userid, SETuserid] = React.useState(''); 

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      SETuserid(uid)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  const RedirecUser =()=>{
    
   console.log(userid, "entrega usuario");
   if (userid === "ZZTKpLy7UUaNYDf8mBEDJLVMD3K3")
       {history.push("/Admin"); return }
      
   if (userid === "jPYKuafB8nRhCzrC5D73nKpc41y2" ) 
      {history.push("/Certif"); return}
      
   if (userid === "9oEGe01qgYeSXu04HlmJ5C3w5Bl1")   
       {history.push("/Practica"); return}
      
   if (userid === "qEupmfuBDqbDriYQTjyEUFH7bV12")   
       {history.push("/Teoria"); return} 
    else  
        { history.push("/"); }        
  }



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={RedirecUser}
          >
           &nbsp; <HomeIcon/> &nbsp; 
          </IconButton>
          <a href="http://www.conducimos.com.co/">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Conducimos
          </Typography>
          </a>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>            
          </Typography>

          <Typography variant="h6" component="div">
                Bienvenido {user? user.email : "☺"}
                </Typography>
          <Link to="SignIn">
                <Button color="inherit" onClick={salir}>{user? "Sign Out" : "Sign In"}</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
