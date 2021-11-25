import React, { useEffect, useState }  from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Grid, Button } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { Edit } from '@mui/icons-material';
import { doc, getDoc } from "firebase/firestore";
import { data as DatABaseF }  from '../components/firebase';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const EditPractica = (props) => {

    const methods = useForm();    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


useEffect(()=>{
  getUserById(props.id)
},[props.id]);
 
 const [users, setUsers] = useState({});     


  
const getUserById = async (pruebaID) => {
  try{
    console.log(pruebaID,"este es") 
    const docRef = doc(DatABaseF, "UserTeoria", pruebaID);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUsers({...docSnap.data()})
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }catch(e){
    console.log("esta en el updateRegister")
  }

}


const handleInputChange= (e)=>{
  const {name, value} = e.target;
  setUsers({...users,[name]:value})
}

const handleSubmit =(e)=>{
  e.preventDefault();
  console.log(users, "envio info")
  props.UpdateUser(users);
  handleClose();
}

    return (
        <>
        <Button onClick={()=> handleOpen()}  color="secondary">
        <Edit/>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            
   
    {/* esto se usa para tener disponible todos los metodos de useForm */}
    <FormProvider {...methods}>
    
        <Grid container spacing={3}>

      
          <Grid item xs={12} sm={3}>  
          <InputLabel id="T1">Horas Practicas</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T1"
              label="Clase 1"
              value={users.T1}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"Ok"}>Ok</MenuItem>
      
              </Select>
          </Grid>
          
          </Grid>
        <div style={{display: "flex", justifyContent:"space-between", marginTop:"2rem"}}>          
          <Button variant="contained" color="secondary" onClick={handleClose}>Cerrar</Button>         
          <Button type="submit" variant="contained" color="primary"  onClick={handleSubmit}>Guardar</Button>
        </div>
     
    </FormProvider>

          </Box>
        </Modal>
      </>
    )
}

export default EditPractica;
