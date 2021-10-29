import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { HelperRoutesPrivate } from './HelperRoutes'
import VistaT from '../vistas/VistaT';
import VistaP from '../vistas/VistaP';
import VistaA from '../vistas/VistaA';
import VistaC from '../vistas/VistaC';
import VistaTcertif from '../vistas/VistaTcertif';
import VistaPcertif from '../vistas/VistaPcertif';
import VistaTadmin from '../vistas/VistaTadmin';
import VistaPadmin from '../vistas/VistaPadmin';
import VistaCadmin from '../vistas/VistaCadmin';
import VistaUadmin from '../vistas/VistaUadmin';
import VistaUserFinal from '../admin/VistaUserF'
import { isAuthenticate } from './auth/authentication';


export const PrivateRoutes = (props) => {
    const isAuth = isAuthenticate();

    return (
        <Switch>
            <HelperRoutesPrivate exact path="/Home" component={VistaUserFinal}/>
            <HelperRoutesPrivate exact path="/Teoria" component={VistaT}/>
            <HelperRoutesPrivate exact path="/Practica" component={VistaP}/>
            <HelperRoutesPrivate exact path="/Certif" component={VistaC}/>
            <HelperRoutesPrivate exact path="/TeoCertif" component={VistaTcertif}/>
            <HelperRoutesPrivate exact path="/PracCertif" component={VistaPcertif}/>
            <HelperRoutesPrivate exact path="/Admin" component={VistaA}/>
            <HelperRoutesPrivate exact path="/TeoAdmin" component={VistaTadmin}/>
            <HelperRoutesPrivate exact path="/PracAdmin" component={VistaPadmin}/>
            <HelperRoutesPrivate exact path="/CertifAdmin" component={VistaCadmin}/>
            <HelperRoutesPrivate exact path="/UserAdmin" component={VistaUadmin}/> 
            <Route exact path="*" render={()=>{
                 return <Redirect to={isAuth ? "/Home" : "/"}/>
            }}/>  
        </Switch>
    )
}

 