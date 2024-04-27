import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import Login from "../pages/Login"

const PrivateRouter = () => {
    const {signed} = useContext(AuthContext)
    console.log(signed);
    
  return !signed ? (
    <Login /> 
  ) : (
    <Navigate to="/home" />
  )
    
  
}

export default PrivateRouter