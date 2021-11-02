import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Horas</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"0 hrs"}>0 hrs</MenuItem><br/>
          <MenuItem value={"2 hrs"}>2 hrs</MenuItem>
   
        </Select>
      </FormControl>
    </Box>
  );
}


export function ExamenSelect() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Examen</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            onChange={handleChange}
          >
            <MenuItem value={"Pendiente"}>Pendiente</MenuItem><br/>
            <MenuItem value={"Aprobó"}>Aprobó</MenuItem><br/>
            {/* <MenuItem value={20}>Aprobó</MenuItem><br/> */}
            <MenuItem value={"Reprobo"}>Reprobo</MenuItem>
     
          </Select>
        </FormControl>
      </Box>
    );
  }
  
  export function CertifSelect1() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Examenes medicos</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            onChange={handleChange}
          >
            <MenuItem value={"Pendiente"}>Pendiente</MenuItem><br/>
            <MenuItem value={"Entregado"}>Entregado</MenuItem>            
     
          </Select>
        </FormControl>
      </Box>
    );
  }
  

  export function CertifSelect2() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Huella</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            onChange={handleChange}
          >
            <MenuItem value={10}>Pendiente</MenuItem><br/>
            <MenuItem value={20}>Entregada</MenuItem>            
     
          </Select>
        </FormControl>
      </Box>
    );
  }

  
  export function CertifSelect3() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Fotografia</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            onChange={handleChange}
          >
            <MenuItem value={10}>Pendiente</MenuItem><br/>
            <MenuItem value={20}>Entregada</MenuItem>            
     
          </Select>
        </FormControl>
      </Box>
    );
  }