import React from 'react'
import { Redirect, Route } from 'react-router';
// import { useStateValue } from '../StateProvider';
import { isAuthenticate } from './auth/authentication';




export const HelperRoutePublic = ({component, ...options}) => {
    const isAuth = isAuthenticate();   
    if (!isAuth) return <Route {...options} component={component}/>
    return <Redirect to="/Home"/>
}
export const HelperRoutesPrivate = ({component, ...options}) => {
    const isAuth = isAuthenticate();   
    if (isAuth) return <Route {...options} component={component}/>
    return <Redirect to="/SignIn"/>
 }

 