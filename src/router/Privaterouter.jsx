import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import Login from "../pages/Login"
import Home from "../pages/Home"

const PrivateRouter = () => {
    const {signed} = useContext(AuthContext)
    console.log(signed);
    
  return !signed ? (
    <Login /> 
  ) : (
    <Home />
  )
    
  
}

export default PrivateRouter