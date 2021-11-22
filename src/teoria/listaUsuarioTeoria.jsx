import React, { useEffect, useState } from 'react'
import Registro from './Registro'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { doc, setDoc, deleteDoc, updateDoc, onSnapshot, orderBy, query, collection} from "firebase/firestore";
import { data as DatABaseF,}  from '../components/firebase'
import UpdateRegistro from './UpdateRegister';
import PasoTeoria from './pasoTeoria';



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

//------------------------------DELETE-----------------------------------

export const DeleteUser = async (document) => {
    
  console.log(document)
  if(window.confirm("¿ estas seguro ?")){
    await deleteDoc(doc(DatABaseF, "UserCoducimos", document));  
  }

}
//--------------------------------------------------------------------------------------------

const ListaUsuarioTeoria = () => {
  
// window.location.replace('');  
//refresca la pagina

  let [UserCond, setUserCond] = useState([]);
  
// ---------------------------ADD----------------------------------------

  
  const AddUser = async (users) => {  
  let document1 = users.document;
  try{
    await setDoc(doc(DatABaseF,"UserCoducimos", document1), users);
   console.log(users, "agregado");
  
  }catch(e){
    console.log("no conecto")
  }
      
}


//-----------------------------------------------------------------------    
//-----------------------------list--------------------------------------
 const getUser = async () => { 
 
try{
   const q = query(collection(DatABaseF, "UserCoducimos"), orderBy("FechInit"))
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
   
// const getOnline =async ()=>{
// try{
//   const q = query(collection(DatABaseF, "UserCoducimos"));
//   onSnapshot(q, (snapshot) => {
//   snapshot.docChanges().forEach((change) => {
//     if (change.type === "added") {
//         console.log("New city: ", change.doc.data()); 
//         return change.doc.data();
//     }
//     if (change.type === "modified") {
//         console.log("Modified city: ", change.doc.data());  
//         return change.doc.data();       
//     }
//     if (change.type === "removed") {
//         console.log("Removed city: ", change.doc.data()); 
//         return change.doc.data();       
//     }
//     UserConduc.join(change.doc.data())
//     setUserCond(UserConduc) 
//   });
// });}
// catch(e){console.log("revisa el getOnline")}
// }

//-----------------------------------------------------------------------


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
    const UpdateUserRef = doc(DatABaseF, "UserCoducimos", updateDocument);
    await updateDoc(UpdateUserRef, users);
  } catch(e){
    console.log("revisa el codigo")
  }

}

useEffect(()=>{
   getUser()
   console.log("actualiza en tiempo real")    
},[]);


//-----------------------------------------------------------------------

    return (
        <>
        
            <h1 align="center" >MODULO TEÓRICO</h1>
            <Registro AddUser={AddUser}/>

            <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            

            <StyledTableCell>Nombre del Usuario</StyledTableCell>
            <StyledTableCell >Documento de identidad</StyledTableCell>
            <StyledTableCell align="center">Categoria</StyledTableCell>
            <StyledTableCell>Fecha / Ingreso</StyledTableCell>
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
              <StyledTableCell align="center">{items.FechInit}</StyledTableCell>
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
              onClick={()=>setid(items.document)}
              >
              <UpdateRegistro {...{UpdateUser, getUser, id}}/>
              </Button>
              <Button variant="contained" disableElevation color="error" onClick={()=>DeleteUser(items.document)}>
              <DeleteIcon/>
              </Button>
              <Button  onClick={()=>setid(items.document)}>
             <PasoTeoria {...{getUser, id}}/>
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

export default ListaUsuarioTeoria

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------




