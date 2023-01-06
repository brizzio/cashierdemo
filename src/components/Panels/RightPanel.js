import React, {useState, useEffect} from 'react'
import CartDataContainer from '../PanelContainers/CartDataContainer'
import CartListContainer from '../PanelContainers/CartListContainer'
import TotalsContainer from '../PanelContainers/TotalsContainer'
import { Button } from '../CustomUi/Elements'
import CloseCart from '../CloseCart'
import useInfo from '../../context/hooks/useInfo'



import { Theme } from '../Styled'

function RightPanel(props) {



  return (
    <>
    
        
        <div id="top" className="flex flex-row w-full">
            <CartDataContainer client={props.client} />
        </div>
        <div id="list" className={`flex flex-row w-full h-full  mt-1 pt-4 pr-3`}>
            <CartListContainer />
        </div>
        <div id="totals" className="flex flex-col w-full h-16 mt-auto ">
            <TotalsContainer />
        </div>
        <div id="button" className="flex flex-row h-14 p-1 pr-3 w-full  mt-auto">
        <CloseCart buttonText="CHIUDI CONTO" />
        </div>

     </>
   
  )
}

export default RightPanel