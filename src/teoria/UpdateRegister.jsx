import React, { useEffect, useState }  from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Grid, Button } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
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


const UpdateRegistro = (props) => {

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
    const docRef = doc(DatABaseF, "UserCoducimos", pruebaID);
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
  props.getUser();
}
const [age, setAge] = React.useState('');
const handleChange = (event) => {
  setAge(event.target.value);
};

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

          <Grid item xs={12} sm={6}>         
            <TextField
            onChange={handleInputChange}
            required
            fullWidth
            name="firstName"
            label="Nombres"
            value={users.firstName}
            id="firstName"
            />
          </Grid>
          <Grid item xs={12} sm={6}>         
            <TextField
            onChange={handleInputChange}
            required
            fullWidth
            name="lastName"
            label="Apellidos"
            value={users.lastName}
            id="lastName"
            />
          </Grid>
          <Grid item xs={12} sm={6}>         
            <TextField
            onChange={handleInputChange}
            required
            fullWidth
            name="document"
            label="Documento de identidad"
            value={users.document}
            id="document"
            />
          </Grid>
          <Grid item xs={12} sm={6}>         
            <TextField
            onChange={handleInputChange}
            required
            fullWidth
            name="categoria"
            label="Categoria"
            value={users.categoria}
            id="categoria"
            />
          </Grid>
          <Grid item xs={12} sm={6}>         
            <TextField
            onChange={handleInputChange}
            required
            fullWidth
            name="tipeUser"
            label="Tipo de Usuario"
            value={users.tipeUser}
            id="tipeUser"
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>         
            <TextField
            onChange={handleInputChange}
            required
            fullWidth
            name="FechInit"
            label="Fecha de Inicio"
            value={users.FechInit}
            id="FechInit"
            />
          </Grid>
          <Grid item xs={12} sm={6}>         
            <TextField
            onChange={handleInputChange}
            required
            fullWidth
            name="FechEnd"
            label="Fecha fin aprox."
            value={users.FechEnd}
            id="FechEnd"
            />
          </Grid> */}
          <Grid item xs={12} sm={3}>  
          <InputLabel id="T1">Clase 1</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T1"
              label="Clase 1"
              value={users.T1}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>
          </Grid>
          <Grid item xs={12} sm={3}>     

          <InputLabel id="T2">Clase 2</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T2"
              label="Clase 1"
              value={users.T2}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>
          </Grid>
          <Grid item xs={12} sm={3}>         
          <InputLabel id="T3">Clase 3</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T3"
              label="Clase 1"
              value={users.T3}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>
          </Grid>
          <Grid item xs={12} sm={3}>         
          <InputLabel id="T4">Clase 4</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T4"
              label="Clase 1"
              value={users.T4}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>
          </Grid>
          <Grid item xs={12} sm={3}>         
          <InputLabel id="T5">Clase 5</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T5"
              label="Clase 1"
              value={users.T5}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>
          </Grid>
          <Grid item xs={12} sm={3}>         
          <InputLabel id="T6">Clase 6</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T6"
              label="Clase 1"
              value={users.T6}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>
          </Grid>
          <Grid item xs={12} sm={3}>         
          <InputLabel id="T7">Clase 7</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T7"
              label="Clase 1"
              value={users.T7}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>
          </Grid>
          <Grid item xs={12} sm={3}>         
          <InputLabel id="T8">Clase 8</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T8"
              label="Clase 1"
              value={users.T8}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>
          </Grid>
          <Grid item xs={12} sm={3}> 

          <InputLabel id="T9">Clase 9</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T9"
              label="Clase 9"
              value={users.T9}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>

          </Grid>
          <Grid item xs={12} sm={3}>         
          <InputLabel id="T10">Clase 10</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T10"
              label="Clase 1"
              value={users.T10}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>
          </Grid>
          <Grid item xs={12} sm={3}>         
          <InputLabel id="T11">Clase 11</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T11"
              label="Clase 1"
              value={users.T11}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>
          </Grid>
          <Grid item xs={12} sm={3}>         
          <InputLabel id="T12">Clase 12</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T12"
              label="Clase 1"
              value={users.T12}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>
          </Grid>
          <Grid item xs={12} sm={3}>         
          <InputLabel id="T13">Clase 13</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T13"
              label="Clase 1"
              value={users.T13}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>
          </Grid>
          <Grid item xs={12} sm={3}>         
          <InputLabel id="T14">Clase 14</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T14"
              label="Clase 1"
              value={users.T14}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>
          </Grid>
          <Grid item xs={12} sm={3}>         
          <InputLabel id="T15">Clase 15</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T15"
              label="Clase 1"
              value={users.T15}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>
          </Grid>
          <Grid item xs={12} sm={3}>         
          <InputLabel id="T16">Clase 16</InputLabel>
              <Select
              onChange={handleInputChange}
              required
              fullWidth
              name="T16"
              label="Clase 1"
              value={users.T16}              
            >
              <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
              <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
      
              </Select>
          </Grid>
          <Grid item xs={12} sm={6}>  
          <InputLabel id="examen">Examen</InputLabel>
          <Select
             onChange={handleInputChange}
             required
             fullWidth
             name="examen"
             label="Examen"
             value={users.examen}
          >
            <MenuItem value={"Pendiente"}>Pendiente</MenuItem><br/>
            <MenuItem value={"Aprobó"}>Aprobó</MenuItem><br/>
            {/* <MenuItem value={20}>Aprobó</MenuItem><br/> */}
            <MenuItem value={"Reprobo"}>Reprobo</MenuItem>
     
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

export default UpdateRegistro;
