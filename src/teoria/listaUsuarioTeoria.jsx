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
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';


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

//-----------------------------------------------------------------------

const [q, setQ]=useState("");

function search(row){
  return row.filter(
    (row) => 
    row.firstName.toLowerCase().indexOf(q) > - 1 ||
    row.lastName.toLowerCase().indexOf(q) > - 1 ||
    row.categoria.toLowerCase().indexOf(q) > - 1  ||
    row.FechInit.toLowerCase().indexOf(q) > - 1 ||
    row.tipeUser.toLowerCase().indexOf(q) > - 1     
    );
}
//-------------------------------------
useEffect(()=>{
   getUser()
   console.log("actualiza en tiempo real")    
},[]);


//-----------------------------------------------------------------------

    return (
        <>
        
            <h1 align="center" >MODULO TEÓRICO</h1>
            <div>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<FilterListOutlinedIcon fontSize="small"/>&nbsp;&nbsp;<b>FILTRAR</b>&nbsp;&nbsp;&nbsp;</p>
             &nbsp;&nbsp;&nbsp;&nbsp;<input type="text/" value={q} onChange={(e)=> setQ(e.target.value)}/> 
            </div>
            <div align="right">
            &nbsp;&nbsp;&nbsp;&nbsp;<Registro AddUser={AddUser} />  
            </div>
            
            <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            

            <StyledTableCell>Nombre del Usuario</StyledTableCell>
            <StyledTableCell >Documento de identidad</StyledTableCell>
            <StyledTableCell >Tipo de Usuario</StyledTableCell>
            <StyledTableCell align="center">Categoria</StyledTableCell>
            <StyledTableCell>Fecha / Ingreso</StyledTableCell>
            <StyledTableCell align="center">Horas</StyledTableCell>            
            <StyledTableCell align="center">Examen</StyledTableCell>
            <StyledTableCell align="center">Acciones</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          
        {search(UserCond).map((items) => (
            <StyledTableRow key={items.document}>
              <StyledTableCell component="th" scope="row">
              {items.firstName}&nbsp;{items.lastName}
              </StyledTableCell>
              <StyledTableCell align="center">{items.document}</StyledTableCell>
              <StyledTableCell align="center">{items.tipeUser}</StyledTableCell>
              <StyledTableCell align="center">{items.categoria}</StyledTableCell>
              <StyledTableCell align="center">{items.FechInit}</StyledTableCell>
              <StyledTableCell align="center">{items.T1}</StyledTableCell>              
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




