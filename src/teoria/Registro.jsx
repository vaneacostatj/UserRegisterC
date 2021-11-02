import React, { useState }  from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography, Grid, Button } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { TextField } from '@mui/material';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const Registro = (props) => {

    const methods = useForm();    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
const initialStateValues = {
  firstName:'',
  lastName:'',
  document:'',
  categoria:'',
  tipeUser:'',
  FechInit:'',
  FechEnd:'',
   T1 : '0 Hrs',
   T2 : '0 Hrs',
   T3 : '0 Hrs',
   T4 : '0 Hrs',
   T5 : '0 Hrs',
   T6 : '0 Hrs',
   T7 : '0 Hrs',
   T8 : '0 Hrs',
   T9 : '0 Hrs',
   T10: '0 Hrs',
   T11 : '0 Hrs',
   T12 : '0 Hrs',
   T13 : '0 Hrs',
   T14 : '0 Hrs',
   T15 : '0 Hrs',
   T16 : '0 Hrs', 
   examen: 'Pendiente',

 };

 const [users, setUsers] = useState(initialStateValues);  
      

    

    const handleInputChange= (e)=>{
      const {name, value} = e.target;
      setUsers({...users,[name]:value})
    }

    const handleSubmit =(e)=>{
      e.preventDefault();
      console.log(users, "envio info")
      props.AddUser(users);
      handleClose();
    }
  

    return (
        <>
        <Button variant="contained" onClick={()=>handleOpen()} disableElevation color="primary">
        Crear usuario
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            
          <Typography variant='h6' gutterBottom>
      Ingresar Usuario 
    </Typography> 
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
            // type="password"
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
            // type="password"
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
            // type="password"
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
            // type="password"
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
            // type="password"
            id="tipeUser"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h5>AAAA-MM-DD</h5>     
            <TextField
            onChange={handleInputChange}
            required
            fullWidth
            name="FechInit"
            label="Fecha de Inicio"
            // type="password"
            id="FechInit"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <h5>AAAA-MM-DD</h5>             
            <TextField
            onChange={handleInputChange}
            required
            fullWidth
            name="FechEnd"
            label="Fecha fin aprox."
            // type="password"
            id="FechEnd"
            />
          </Grid>
        
          </Grid>
        <div style={{display: "flex", justifyContent:"space-between", marginTop:"2rem"}}>          
          <Button variant="contained" color="secondary" onClick={handleClose}>Cerrar</Button>         
          <Button type="submit" variant="contained" color="primary"  onClick={handleSubmit}>Crear</Button>
        </div>
     
    </FormProvider>

          </Box>
        </Modal>
      </>
    )
}

export default Registro;
