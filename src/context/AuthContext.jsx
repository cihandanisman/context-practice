import React, { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    // const navigate = useNavigate()
    const [ signed, setSigned] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleLogOut =() => {
      setSigned(false)
      setUser('')
        
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (user.email && user.password) {
    //         setSigned(true)
    //         navigate("/")             
    //     } else {
    //         setSigned(false)
            
    //     }
    // }
  return (
    <AuthContext.Provider value={{user, setUser, signed, setSigned, handleLogOut}}>
        {children}
    </AuthContext.Provider>

  )
};

export default AuthProvider;
