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
import EditPractica from './EditPractica';
import PasoCertif from './PasoCertificacion';





const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.warning.light,
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
export const AddUserPractica = async (users) => {  
    let document1 = users.document;
    try{
      await setDoc(doc(DatABaseF,"UserTeoria", document1), users);
     console.log(users, "agregado");
    
    }catch(e){
      console.log("no conecto")
    }
        
  };
//----------------------------LIMPIAR CAMPOS---------------------------------
export const ClearUser = async (users)=>{
  let updateDocument = users.document;
  try{
    console.log(users, "actualiza")
    const UpdateUserRef = doc(DatABaseF, "UserTeoria", updateDocument);
    await updateDoc(UpdateUserRef,{
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
    });
  } catch(e){
    console.log("revisa el codigo")
  }

}
//----------------------------------------------------------------------
//------------------------------DELETE-----------------------------------

export const DeleteUserTeoria = async (document) => {
    
  console.log(document)
  if(window.confirm("¿ estas seguro ?")){
    await deleteDoc(doc(DatABaseF, "UserTeoria", document));
 
  }

}

//-----------------------------------------------------------------------


const ListaUsuarioPractica = () => {
  
// window.location.replace('');  
//refresca la pagina

  let [UserCond, setUserCond] = useState([]);
  
//-----------------------------------------------------------------------    
//-----------------------------list--------------------------------------

const getUser = async () => { 
 
  try{
     const q = query(collection(DatABaseF, "UserTeoria"), orderBy("FechInit"))
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
    const UpdateUserRef = doc(DatABaseF, "UserTeoria", updateDocument);
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
        
            <h1 align="center" >MODULO PRÁCTICO</h1>
            

            <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            

            <StyledTableCell>Nombre del Usuario</StyledTableCell>
            <StyledTableCell >Documento de identidad</StyledTableCell>
            <StyledTableCell align="center">Categoria</StyledTableCell>
            <StyledTableCell align="center">1</StyledTableCell>
            <StyledTableCell align="center">2</StyledTableCell>
            <StyledTableCell align="center">3</StyledTableCell>
            <StyledTableCell align="center">4</StyledTableCell>
            <StyledTableCell align="center">5</StyledTableCell>
            <StyledTableCell align="center">6</StyledTableCell>
            <StyledTableCell align="center">7</StyledTableCell>
            <StyledTableCell align="center">8</StyledTableCell>
            <StyledTableCell align="center">9</StyledTableCell>
            <StyledTableCell align="center">10</StyledTableCell>
            <StyledTableCell align="center">11</StyledTableCell>
            <StyledTableCell align="center">12</StyledTableCell>
            <StyledTableCell align="center">13</StyledTableCell>
            <StyledTableCell align="center">14</StyledTableCell>
            <StyledTableCell align="center">15</StyledTableCell>
           
            <StyledTableCell align="center">Examen</StyledTableCell>
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
              <StyledTableCell align="center">{items.T1}</StyledTableCell>
              <StyledTableCell align="center">{items.T2}</StyledTableCell>
              <StyledTableCell align="center">{items.T3}</StyledTableCell>
              <StyledTableCell align="center">{items.T4}</StyledTableCell>
              <StyledTableCell align="center">{items.T5}</StyledTableCell>
              <StyledTableCell align="center">{items.T6}</StyledTableCell>
              <StyledTableCell align="center">{items.T7}</StyledTableCell>
              <StyledTableCell align="center">{items.T8}</StyledTableCell>
              <StyledTableCell align="center">{items.T9}</StyledTableCell>
              <StyledTableCell align="center">{items.T10}</StyledTableCell>
              <StyledTableCell align="center">{items.T11}</StyledTableCell>
              <StyledTableCell align="center">{items.T12}</StyledTableCell>
              <StyledTableCell align="center">{items.T13}</StyledTableCell>
              <StyledTableCell align="center">{items.T14}</StyledTableCell>
              <StyledTableCell align="center">{items.T15}</StyledTableCell>
             
              <StyledTableCell align="center">{items.examen}</StyledTableCell>
              <StyledTableCell align="center">
              <Button border="none"          
              onClick={()=>setid(items.document)}>
              <EditPractica {...{UpdateUser, getUser, id}}/> 
              </Button>            
              <Button onClick={()=>setid(items.document)}>            
              <PasoCertif  {...{getUser, id}}/>
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

export default ListaUsuarioPractica;

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------




