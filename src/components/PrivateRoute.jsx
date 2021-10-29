import React from 'react'
import { Redirect, Route } from 'react-router';
import { useStateValue } from '../StateProvider';


const PrivateRoute = ({component:Component, ...rest}) => {
    const [{user}, dispatch] = useStateValue();

    const uId =user.uid;

    return (
        <Route
        {...rest}
        render={props=>{ return user ? <Component {...props}/> : <Redirect to="/"/>  
        }}
        >            
        </Route>
    )
}

export default PrivateRoute


 
export const PrivateRouteCertif = () => {
    return (
        <div>
            
        </div>
    )
}
