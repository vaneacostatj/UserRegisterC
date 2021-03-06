import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { collection, doc, setDoc, deleteDoc, onSnapshot, query, updateDoc, } from "firebase/firestore";
import { data as DatABaseF,}  from '../components/firebase'



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



//--------------------------------------------------------------------------------------------

const VistaHorasTeoria = () => {
  
// window.location.replace('');  
//refresca la pagina

  let [UserCond, setUserCond] = useState([]);
  
//-----------------------------------------------------------------------    
//-----------------------------list--------------------------------------
 const getUser = async () => { 
    let UserConduc = [];
try{
  await DatABaseF.collection('UserCoducimos').onSnapshot((querySnapshot)=>{      
    querySnapshot.forEach((doc)=>{   
      UserConduc.push({...doc.data()});                   
    }) 
    setUserCond(UserConduc)  
  }) 
}catch(e){
console.log("revisa el get")
} }
   




useEffect(()=>{
   getUser()
   console.log("actualiza en tiempo real")    
},[])


//-----------------------------------------------------------------------

    return (
        <>
        
            <h1 align="center" >Modulo de introducci??n ( Teoria ).</h1>
         

            <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            

            <StyledTableCell>Nombre del Usuario</StyledTableCell>
            <StyledTableCell >Documento de identidad</StyledTableCell>
            <StyledTableCell align="center">Categoria</StyledTableCell>
            <StyledTableCell>Fecha / Ingreso</StyledTableCell>
            <StyledTableCell align="center">Horas</StyledTableCell>
            <StyledTableCell align="center">Examen</StyledTableCell>
         


          </TableRow>
        </TableHead>
        <TableBody>
          
        {UserCond.map((items) => (
            <StyledTableRow key={items.document}>
              <StyledTableCell component="th" scope="row">
              {items.firstName}&nbsp;{items.lastName}
              </StyledTableCell>
              <StyledTableCell align="center">{items.document}</StyledTableCell>
              <StyledTableCell align="center">{items.categoria}</StyledTableCell>
              <StyledTableCell align="center">{items.FechInit}</StyledTableCell>
              <StyledTableCell align="center">{items.T1}</StyledTableCell>
              <StyledTableCell align="center">{items.examen}</StyledTableCell>
   

            </StyledTableRow>
          ))}


        </TableBody>
      </Table>
    </TableContainer>
            
        </>
    )
}

export default VistaHorasTeoria;

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------




