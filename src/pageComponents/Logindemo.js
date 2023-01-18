import React , { useContext, useEffect } from 'react'
import  { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


import { Button } from "../components/CustomUi/Elements";

import useAuth from '../context/hooks/useAuth';

export default function Logindemo () {

  const {authenticated, handleLogindemo, verifyToken} = useAuth()

  const navigate = useNavigate();

  

  useEffect(() => {
    console.log('isAuthenticated',authenticated)
    const token = verifyToken()
    console.log('verifytoken', token)
    if (!!token) {
      console.log('vai navegar')
      
      navigate("/");
      
    }
  }, []);
  

  const handleLogin = (type) => {
    //Prevent page reload
    
    handleLogindemo({"type":type})
    navigate("/");
       
  };

 

  return (

    <>
      <article className='grid h-screen place-items-center '>
          <div className='flex flex-col gap-4 p-6 w-2/6 h-2/6 items-center justify-center border-gray border-2 shadow-md rounded-lg'>

            <h1>CASSA MAREL</h1>
            
            <Button variant="main" size="small" className="min-w-9 h-12" onClick={() => handleLogin('admin')}>Accessa come Amministratore</Button>
            

           
            <Button variant="main" size="small" className="min-w-9 h-12 " onClick={() => handleLogin('cassa')}>Accessa come Operatore Cassa</Button>
            


          </div>
          

         
        



      </article>
    
    </>
    
  )
  
}







