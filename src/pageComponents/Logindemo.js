import React , { useContext } from 'react'
import  { useRef, useState } from "react";
import { Navigate } from "react-router-dom";


import { Button } from "../components/CustomUi/Elements";

import useAuth from '../context/hooks/useAuth';

export default function Logindemo () {

  const {authenticated, handleLogindemo} = useAuth()
  console.log(authenticated)

  const [inputs, setInputs] = useState({});
  const [layoutName, setLayoutName] = useState("default");
  const [inputName, setInputName] = useState("default");

  const [isSubmitted, setIsSubmitted] =useState(false)


  

  const handleLogin = (type) => {
    //Prevent page reload
    
    setIsSubmitted(handleLogindemo({"type":type}))
    
       
  };

 

  return (

    <>
      <article>

          <div>
          <Button variant="main" size="small" className="min-w-9" onClick={() => handleLogin('admin')}>Accessa come Amministratore</Button>
          </div>

          <div>
          <Button variant="main" size="small" className="min-w-9" onClick={() => handleLogin('cassa')}>Accessa come Operatore Cassa</Button>
          </div>

          {isSubmitted && (
          <Navigate to="/" replace={true} />
        )}



      </article>
    
    </>
    
  )
  
}







