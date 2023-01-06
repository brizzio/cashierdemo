import React, { useState, useEffect, useRef } from 'react'
import {User} from '@styled-icons/feather'
import {FoodMenu} from '@styled-icons/boxicons-regular'
import { CalendarDay } from '@styled-icons/fluentui-system-filled'
import useInfo from '../../context/hooks/useInfo'
import { Button } from '../CustomUi/Elements'

import NewClient from '../NewClient'


const theme={color:{black:'#051619'}}



function CartDataContainer(props) {

  const {newClient, addNewClient} = useInfo()

    
  console.log('CartDataContainer', newClient)
  console.log('newClient', newClient.hasOwnProperty('name'))


  return (
    
    <div className={`flex flex-row w-full h-4/6 text-${theme.color.black} justify-around`}>
        <div className={`flex flex-row
            h-full w-1/6
            items-center justify-center border-[${theme.color.black}] border-b-4 pb-3 mr-3 gap-2`}>
            <CalendarDay className='h-6 mt-auto'/>
            <p className={`font-bold text-lg mt-auto` }>116</p>
        </div>
        <div className={`flex flex-row
            h-full w-1/6 
            items-center justify-center border-[${theme.color.black}] border-b-4 pb-3 mr-3 gap-2`}>
            <FoodMenu className='h-6 mt-auto'/>
            <p className={`font-bold text-lg mt-auto` }>1457</p>
        </div>
        <div className={`flex flex-row h-full w-1/6
            items-center justify-center border-[${theme.color.black}] border-b-4 pb-3 mr-3 gap-2 mb-0`}>
            <User className='h-9 mt-auto'/>
            {(newClient.hasOwnProperty('name')) ?
            <span className='font-bold text-sm mt-auto'>{newClient.name + " " + newClient.lname}</span> :
            <NewClient save={addNewClient} buttonText="CLIENTE"/> 
            
            }
        </div>
    </div>
    
  )
}

export default CartDataContainer