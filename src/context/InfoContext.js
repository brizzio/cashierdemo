import React, { createContext, useEffect, useState } from 'react'

import useInfo from './hooks/useInfo';



const Context = createContext();



 const InfoProvider = ({children})=>{

   

    return(
        <Context.Provider value={useInfo()}>
            {children}
        </Context.Provider>
        
    )

}

export default InfoProvider



