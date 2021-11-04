import React from 'react'
import { Redirect, Route } from 'react-router';
// import { useStateValue } from '../StateProvider';
// import { isAuthenticate } from './auth/authentication';




export const HelperRoutePublic = ({component, ...options}) => {
    var isAuth = sessionStorage.getItem('userAct');
    console.log(isAuth)
    if (isAuth === "null") return <Route {...options} component={component}/>
    return <Redirect to="/Home"/>
}
export const HelperRoutesPrivate = ({component, ...options}) => {
    // const isAuth = isAuthenticate();   
    var isAuth = sessionStorage.getItem('userAct');
    console.log(isAuth)
    if (isAuth !== "null") return <Route {...options} component={component}/>
    return <Redirect to="/signIn"/>
 }

 