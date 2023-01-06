import React from 'react'
import { Theme } from '../Styled'
import { EuroSign } from '@styled-icons/fa-solid/EuroSign'
import {Delete} from '@styled-icons/open-iconic/Delete'

const DelButton = ()=>{
  return (
    <button><Delete className='w-4'/></button>
  )
}

function CartListContainer() {
  return (
    <div className="container flex flex-col w-full h-full  ">

      <div id="table-header" className='flex flex-row items-center justify-between py-2 px-3 text-xs border-y border-gray-800' >
        <div>
          <span className="px-2">CARRELLO SPESA</span>
          <span className="px-2">Data: 26/12/2022</span> 
          <span className="px-2">Cliente: 58659</span>  
          <span className="px-2">Ora Inizio: 12:51:30</span>  
        </div>  

      {/* <div  class="py-2 px-3">
              PRODOTTO
          </div>
          <div  class="py-2 px-3">
              UPC
          </div>
          <div  class="py-2 px-3">
              TIPO
          </div>
          <div  class="py-2 px-3">
              PREZZO
          </div>
          <div  class="py-2 px-3">
              D
          </div>*/}

      </div> 

      <div id="table-body" className='flex flex-col h-80 overflow-y-scroll'>
        
        <div className='flex flex-row border-b border-gray-400  px-3 py-2 items-center justify-between text-xs text-gray-900'>
          <div className='flex flex-row items-center'>
            <span className="px-2">Ice Tea: Limone 1,5 l - Lipton</span>  
            <span className="px-2">7908546855</span>         
            <span className="px-2">R</span> 
            <span className="px-2">0.5</span><span>Kg</span>          
          </div>  
          <div className="py-1 px-1">
          <div className="flex flex-row py-1 px-1 items-center gap-3">
            <span>€ 12,33</span>
            <DelButton />
            </div>          
          </div>
        </div>
        
        <div className='flex flex-row px-3 py-2 items-center justify-between text-xs text-gray-900 border-b border-gray-400'>
          <div className='flex flex-row items-center'>
            <span className="px-2">Ice Tea: Limone 1,5 l - Lipton</span>  
            <span className="px-2">7908546855</span>         
            <span className="px-2">R</span> 
            <span className="px-2">0.5</span><span>Kg</span>          
          </div>  
          <div className="py-1 px-1">
          <div className="flex flex-row py-1 px-1 items-center gap-3">
            <span>€ 12,33</span>
            <DelButton />
            </div>          
          </div>
        </div>
        <div className='flex flex-row px-3 py-2 items-center justify-between text-xs text-gray-900 border-b border-gray-400'>
          <div className='flex flex-row items-center'>
            <span className="px-2">Ice Tea: Limone 1,5 l - Lipton</span>  
            <span className="px-2">7908546855</span>         
            <span className="px-2">R</span> 
            <span className="px-2">0.5</span><span>Kg</span>          
          </div>  
          <div className="py-1 px-1">
          <div className="flex flex-row py-1 px-1 items-center gap-3">
            <span>€ 12,33</span>
            <DelButton />
            </div>          
          </div>
        </div>
        <div className='flex flex-row px-3 py-2 items-center justify-between text-xs text-gray-900 border-b border-gray-400'>
          <div className='flex flex-row items-center'>
            <span className="px-2">Ice Tea: Limone 1,5 l - Lipton</span>  
            <span className="px-2">7908546855</span>         
            <span className="px-2">R</span> 
            <span className="px-2">0.5</span><span>Kg</span>          
          </div>  
          <div className="py-1 px-1">
          <div className="flex flex-row py-1 px-1 items-center gap-3">
            <span>€ 12,33</span>
            <DelButton />
            </div>          
          </div>
        </div>
        <div className='flex flex-row px-3 py-2 items-center justify-between text-xs text-gray-900 border-b border-gray-400'>
          <div className='flex flex-row items-center'>
            <span className="px-2">Ice Tea: Limone 1,5 l - Lipton</span>  
            <span className="px-2">7908546855</span>         
            <span className="px-2">R</span> 
            <span className="px-2">0.5</span><span>Kg</span>          
          </div>  
          <div className="py-1 px-1">
          <div className="flex flex-row py-1 px-1 items-center gap-3">
            <span>€ 12,33</span>
            <DelButton />
            </div>          
          </div>
        </div>
        <div className='flex flex-row px-3 py-2 items-center justify-between text-xs text-gray-900 border-b border-gray-400'>
          <div className='flex flex-row items-center'>
            <span className="px-2">Ice Tea: Limone 1,5 l - Lipton</span>  
            <span className="px-2">7908546855</span>         
            <span className="px-2">R</span> 
            <span className="px-2">0.5</span><span>Kg</span>          
          </div>  
          <div className="py-1 px-1">
          <div className="flex flex-row py-1 px-1 items-center gap-3">
            <span>€ 12,33</span>
            <DelButton />
            </div>          
          </div>
        </div>
        <div className='flex flex-row px-3 py-2 items-center justify-between text-xs text-gray-900 border-b border-gray-400'>
          <div className='flex flex-row items-center'>
            <span className="px-2">Ice Tea: Limone 1,5 l - Lipton</span>  
            <span className="px-2">7908546855</span>         
            <span className="px-2">R</span> 
            <span className="px-2">0.5</span><span>Kg</span>          
          </div>  
          <div className="py-1 px-1">
          <div className="flex flex-row py-1 px-1 items-center gap-3">
            <span>€ 12,33</span>
            <DelButton />
            </div>          
          </div>
        </div>
        <div className='flex flex-row px-3 py-2 items-center justify-between text-xs text-gray-900 border-b border-gray-400'>
          <div className='flex flex-row items-center'>
            <span className="px-2">Ice Tea: Limone 1,5 l - Lipton</span>  
            <span className="px-2">7908546855</span>         
            <span className="px-2">R</span> 
            <span className="px-2">0.5</span><span>Kg</span>          
          </div>  
          <div className="py-1 px-1">
          <div className="flex flex-row py-1 px-1 items-center gap-3">
            <span>€ 12,33</span>
            <DelButton />
            </div>          
          </div>
        </div>
        
      
      
      </div>

    </div>
    





    
  )
}

export default CartListContainer

