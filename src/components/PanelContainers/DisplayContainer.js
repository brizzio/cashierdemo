import React, { useState } from 'react'
import {Button} from '../CustomUi/Elements'
import { useNavigate } from 'react-router-dom';
import NumericKb from '../CustomUi/NumericKb'

import ProductsPicker from '../ProductsPicker';
import LastCart from '../LastCart';
import SuspendCashier from '../SuspendCashier';
import CloseCashier from '../CloseCashier';
import CancelCart from '../CancelCart';

import Lottery from '../Lottery'
import LoyaltyCards from '../LoyaltyCards'
import NewCart from '../NewCart'


import { TrayItemAdd } from '@styled-icons/fluentui-system-regular/TrayItemAdd'

const theme={color:{black:'#051619'}}



function DisplayContainer() {

 const navigate = useNavigate()
  
  const [quantity, setQuantity] = useState(1)

  const product = {
    quantity:quantity,
    upc:'7908546855',
    name:'Ice Tea: Limone 1,5 l',
    brand:'Lipton',
    manufacturer:'PEPSICO BEVERAGES ITALIA',
    department:'Acqua, succhi e bibite',
    price:'120,33'
  }  

  const handleQuantityChange = (q) =>{
    setQuantity(q)
  }

  return (
    <div className="flex flex-col min-h-full min-w-full mt-3">

       

        <div id="display" className="flex flex-row min-w-[21rem] mt-0 bg-[#F2F7F5] py-4 ml-5 border-2 border-blue-200 rounded-2xl shadow-xl">
                
            <div className="h-full w-14 flex items-center justify-center ml-2">
                <TrayItemAdd className='w-14' /> {/* //<!-- image --> */}
            </div>
            <div className="h-full w-14 bg-white flex items-center justify-center text-slate-400 text-3xl ml-2">
                {quantity}
            </div>
            <div className="w-full flex flex-col justify-center pl-3">
                
                <div className="text-3xl font-sans font-thin	">
                        {product.upc}
                </div>
               
                <div className="text-2xl font-sans font-semibold	">
                    <h3 >
                      {product.name}
                    <span> - </span>
                        <span>{product.brand}</span>
                    </h3>{/* <!-- name --> */}
                </div>
                               
                <div>
                    
                    <h6>
                    {product.manufacturer}{/* <!-- manufacturer --> */}
                    <span> - </span>
                    {product.department} {/* <!-- departament --> */}
                    </h6> 
                    
                </div>
    
            </div>
            <div className="h-full w-2/6 flex items-center justify-center text-4xl font-sans font-semibold">
               {product.price} 
            </div>
            
        </div>

        <div className="flex flex-row min-w-full mt-2 pt-2 ml-6 pr-4 items-center justify-between">
            <span className="bg-fuchsia-200 shadow-md text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 mt-auto">Data Prezzi: 22/12/2022</span>
            <span className="bg-orange-200 shadow-md text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Prodotti: 3.570</span>
            <span className="bg-lime-200 shadow-md text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Negozio: Supermercati Marel</span>
            <span className="bg-rose-200 shadow-md text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Sessione Attiva: hdu-fdsq-eafcs</span>
        </div>

       
        <div className="flex flex-col h-[21rem] min-w-full ml-3 pr-1 px-2 pt-2 border border-2">
            
            <div className="grid grid-flow-col-dense grid-cols-4 grid-rows-5 gap-2 w-full h-full py-2 pr-2">
                
                <LoyaltyCards buttonText="CARTE FEDELTÁ" />
                
                <Lottery buttonText="LOTTERIA SCONTRINI" />

                <NewCart buttonText="NUOVO"/>
                
                           
                <div className=" rounded col-span-2 row-span-4 mb-2">
                    <NumericKb onChange={handleQuantityChange}/>
                </div>
                
                <CancelCart buttonText="CANCELLA" />

                <ProductsPicker buttonText="PRODOTTI"/>
                
                <LastCart buttonText='ULTIMO CARRELLO'/>

                {/* <Button variant="main" size="small" className=" min-h-full min-w-full" onClick={()=> navigate("/suspend")}>SOSPENDI CASSA</Button> */}
               
                <SuspendCashier buttonText="SOSPENDI CASSA"/>
                
                <CloseCashier buttonText="CHIUDERE CASSA"/>
                    
                
            </div>
        
        </div>
    </div>
   
  )
}

export default DisplayContainer