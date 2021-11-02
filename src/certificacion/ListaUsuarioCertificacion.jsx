import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { collection, doc, setDoc, deleteDoc, onSnapshot, query, updateDoc, orderBy } from "firebase/firestore";
import { data as DatABaseF,}  from '../components/firebase'
import EditCertif from './EditCertif';
import PasoData from './PasoData';






const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.light,
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
// ---------------------------ADD----------------------------------------
export const AddUserCertif= async (users) => {  
    let document1 = users.document;
    try{
      await setDoc(doc(DatABaseF,"UserCERTIF", document1), users);
     console.log(users, "agregado");
    
    }catch(e){
      console.log("no conecto")
    }
        
  };
//----------------------------LIMPIAR CAMPOS---------------------------------
export const ClearUserCertif = async (users)=>{
  let updateDocument = users.document;
  try{
    console.log(users, "actualiza")
    const UpdateUserRef = doc(DatABaseF, "UserCERTIF", updateDocument);
    await updateDoc(UpdateUserRef,{
      T3 : 'Pendiente',
      T4 : 'Pendiente',
      T5 : 'Pendiente',
    });
  } catch(e){
    console.log("revisa el codigo")
  }

}
//----------------------------------------------------------------------
//------------------------------DELETE-----------------------------------

export const DeleteUserCERTIF = async (document) => {
    
  console.log(document)
  if(window.confirm("¿ estas seguro ?")){
    await deleteDoc(doc(DatABaseF, "UserCERTIF", document));
 
  }

}

//-----------------------------------------------------------------------


const ListaUsuarioCertif = () => {
  
// window.location.replace('');  
//refresca la pagina

  let [UserCond, setUserCond] = useState([]);
  
//-----------------------------------------------------------------------    
//-----------------------------list--------------------------------------

const getUser = async () => { 
 
  try{
     const q = query(collection(DatABaseF, "UserCERTIF"), orderBy("FechInit"))
     await onSnapshot(q, (querySnapshot)=>{ 
      let UserConduc = [];     
      querySnapshot.forEach((doc)=>{   
        UserConduc.push(doc.data());                   
      }) 
      setUserCond(UserConduc)  
    }) 
  }catch(e){
  console.log("revisa el get")
  } }

//-----------------------------------------------------------------------
//-------------------------------UPDATE----------------------------------
let [id, setid] = useState(''); 
// const envioID = (document)=>{
//   console.log(document, "carga");
//   setid(document);
// }

const UpdateUser = async (users)=>{
  let updateDocument = users.document;
  try{
    console.log(users, "actualiza")
    const UpdateUserRef = doc(DatABaseF, "UserCERTIF", updateDocument);
    await updateDoc(UpdateUserRef, users);
  } catch(e){
    console.log("revisa el codigo")
  }

}

//--------------------------------------------------------

useEffect(()=>{
   getUser()
   console.log("actualiza en tiempo real")    
},[])


//-----------------------------------------------------------------------

    return (
        <>
        
            <h1 align="center" >CERTIFICACIÓN</h1>
            

            <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            

            <StyledTableCell>Nombre del Usuario</StyledTableCell>
            <StyledTableCell >Documento de identidad</StyledTableCell>
            <StyledTableCell align="center">Categoria</StyledTableCell>
            <StyledTableCell align="center">Fecha/ Inicio</StyledTableCell>
            <StyledTableCell align="center">Fecha/ fin estimado</StyledTableCell>
            <StyledTableCell align="center">Tipo de usuario</StyledTableCell>
            <StyledTableCell align="center">Examenes medicos</StyledTableCell>
            <StyledTableCell align="center">Huella</StyledTableCell>
            <StyledTableCell align="center">Fotografia</StyledTableCell>
            <StyledTableCell align="center">Acciones</StyledTableCell>

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
              <StyledTableCell align="center">{items.FechEnd}</StyledTableCell>
              <StyledTableCell align="center">{items.tipeUser}</StyledTableCell>
              <StyledTableCell align="center">{items.T3}</StyledTableCell>
              <StyledTableCell align="center">{items.T4}</StyledTableCell>
              <StyledTableCell align="center">{items.T5}</StyledTableCell>
              <StyledTableCell align="center">
              <Button border="none"          
              onClick={()=>setid(items.document)} >
              <EditCertif {...{UpdateUser, getUser, id}}/> 
              </Button>
            
              <Button onClick={()=>setid(items.document)}>
              <PasoData {...{getUser, id}}/>
              </Button>
                
                
              </StyledTableCell>

            </StyledTableRow>
          ))}


        </TableBody>
      </Table>
    </TableContainer>
          
        </>
    )
}

export default ListaUsuarioCertif;

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------




