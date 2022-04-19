
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';



const divStyle = {
    color: 'black',
    backgroundImage: 'url("https://img.freepik.com/foto-gratis/holi-color-fondo-sobre-fondo-blanco_24972-874.jpg?w=2000")',
  };
  
 export default function Presentation(){
    React.useEffect(()=>{
       var userAct="null";   
     },[]);
 
        return (
            
                
                <div className="container" style={divStyle} id="container21">
                <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} sm={8} md={8} >
            
                    <img src={"https://i.postimg.cc/bNP4h0tV/cr-vat.png"} width="70%" ></img><br />
                    
                    
                        ¡Las claves se encuentran al final de la lectura!
                <br /><br />
                
                    <Typography>Es una aplicación de control para escuelas de conducción que se divide 
                    en (3) tres partes y una vista pública de los usuarios <br />
                    certificados (vista de usuarios).<br />
                    <br />
                    La primera es la parte teórica, en la cual se genera el registro del usuario, 
                    posterior a esto se puede editar, eliminar o dar<br />
                    paso a la siguiente fase.           
                    En el módulo teórico podrás tener acceso a la tabla de ingreso de usuarios como principal (HOME)<br />
                    y a la vista de usuarios.<br />  
                    <br />  
                    En la segunda parte, podrás ingresar el numero de horas que el usuario ha realizado en sus practicas o seleccionar ok en<br />
                    caso de estar completas y dar paso a la siguiente fase.
                    En el módulo practico podrás tener acceso a la tabla con control de <br />
                    horas como principal (HOME) y a la vista de usuarios. <br />  <br />  
                    La tercera y ultima fase es la certificación podrás indicar si la persona presento sus exámenes médicos, fotografía y <br />
                    huella al guardar esa información su siguiente opción es verificar la información del usuario y certificar.<br /><br />

                    Al terminar las 3 fases la información queda almacenada en la base de datos que se encuentra conectada a la vista de <br />
                    usuario. La anteriormente mencionada es una vista de acceso público en la cual podrán verificar si su proceso ya finalizo <br />
                    y se encuentra certificado, en la misma se podrá ejecutar filtros de búsqueda para facilitar la gestión.<br /><br />

                    Esta aplicación cuenta con un cuarto usuario (ADMINISTRADOR) el cual tiene acceso a todos los módulos y cuenta con <br />
                    los permisos para agregar, editar, modificar y eliminar además de ser el único usuario que podrá ejecutar los comandos<br />
                    anteriormente mencionados en la tabla (Usuarios certificados) <br />
                    

                </Typography>
           
        </Grid>
        <Grid className="contenedor" item xs={6} sm={4} md={4}>
          
        <br /><br /><br /><br />
    
        <img className="imagen" src={"https://i.postimg.cc/Yqgg1gD7/cr1.png"} width="80%"></img><br />
        <br />
        <img className="imagen" src={"https://i.postimg.cc/HkgM3xFy/cr2.png"} width="80%" align="right"></img><br />
        <br />
        <img className="imagen" src={"https://i.postimg.cc/0y0w4vqH/cr3.png"} width="80%" ></img><br />
        <br />
        <img className="imagen" src={"https://i.postimg.cc/CKMqT2hM/cr4.png"} width="80%" align="right"></img><br />
        <br />
        <img className="imagen" src={"https://i.postimg.cc/rpht89s1/cr5.png"} width="80%" ></img>
                   
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
        <Typography color="purple">
        Usuario: teoria@vat.com	<br />	
        Clave: teoria1*<br /><br />

        Usuario: practica@vat.com	<br />	
        Clave: practica1*<br /><br />


        Usuario: certificado@vat.com<br />	
        Clave: certificado1*<br /><br />

        Usuario: admin@vat.com	<br />	
        Clave: admin1*<br /><br />

        https://github.com/vaneacostatj/UserRegisterC
        </Typography>
        </Grid>

      </Grid>
    </Box>
                    <br /><br /><br />
                


                    
                </div>
              
           
        );
    
}

