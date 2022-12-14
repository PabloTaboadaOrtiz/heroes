import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

export const PublicRoutes = ({children}) => {

    const {user} = useContext(AuthContext);
    console.log(user.logged)
    return user.logged ? <Navigate to='/marvel'/> : children
}
