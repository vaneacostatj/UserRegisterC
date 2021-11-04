import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import VistaUserFinal from '../admin/VistaUserF'
import SignIn from '../components/Signin'
// import { useStateValue } from '../StateProvider'
import { isAuthenticate } from './auth/authentication'
import { HelperRoutePublic } from './HelperRoutes'


export const PublicRoutes = () => {
    var isAuth = sessionStorage.getItem('userAct');
    return (
        <Switch>
            <HelperRoutePublic exact path="/" component={VistaUserFinal}/>
            <HelperRoutePublic exact path="/SignIn" component={SignIn}/>
            <Route exact path="*" render={()=>{
                return <Redirect to={isAuth !== "null" ? "/Home" : "/signIn"}/>
            }}/>           
        </Switch>
    )
}


