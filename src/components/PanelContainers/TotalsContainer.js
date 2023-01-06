import React , { useState }from 'react'
import styled from 'styled-components';
import {Cart, CartPlus} from '@styled-icons/bootstrap'
import { Scale } from '@styled-icons/ionicons-outline/Scale'
import { ShoppingBag } from '@styled-icons/material-outlined/ShoppingBag'
import { EuroSign } from '@styled-icons/fa-solid/EuroSign'
import { PlusLg} from '@styled-icons/bootstrap'
import {Minus} from '@styled-icons/heroicons-outline'
import { Line } from '../CustomUi/Elements';


const TotalsContainer = (props) => {

    /* console.log('no totals ===> ', props.summary)
    
    const CartItemsCount = props.summary.count;
    const TotalWeightKg = props.summary.weight;
    const BagsCount = props.summary.bags
    const Total= Number(props.summary.total).toFixed(2) */
  
    const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

    function increment() {
      //setCount(prevCount => prevCount+=1);
      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }

    function decrement() {
      setCount(function (prevCount) {
        if (prevCount > 0) {
          return (prevCount -= 1); 
        } else {
          return (prevCount = 0);
        }
      });
    }

    
  
    return (
  
      <>
          <div className={`flex flex-row items-center justify-between w-full h-full mt-0 pr-3 gap-4 `}>


            <div className={`flex flex-row items-center justify-center border w-1/6 gap-3 rounded-full border-gray-700 px-3  py-2`}>
              <Cart className='w-6 items-center py-1'/>
              <span className={`text-2xl font-thin`}>7</span>
            </div>

            <div className={`flex flex-row items-center justify-between	border border-gray-700 rounded-full w-1/4  py-2`}>
              <button onClick={decrement}>
              <Minus className='w-6 items-center ml-2'/>
              </button>

              <div className={`flex flex-row items-center gap-2`}>
                 <ShoppingBag className='w-6 items-center py-1'/>
                  <span className={`text-2xl font-thin`}>{count}</span>
              </div>
             
             <button onClick={increment}>
              <PlusLg className='w-6 items-center mr-2'/>
             </button>
              
            </div> 

            <div className={`flex flex-row items-center justify-center border rounded-full border-gray-700 w-1/4 gap-3 py-2 `}>
              <Scale className='w-6 items-center py-1'/>
              <span className={`text-2xl font-thin`}>13,5 Kg</span>
            </div>  
            
      
            <div className={`flex flex-row items-center justify-center border rounded-full border-gray-700 w-1/4 gap-2 px-2 py-2 `}>
              <EuroSign className='w-4 items-center py-1'/>
              <span className={`text-2xl font-thin`}>1.250,00</span>
            </div> 
          </div>
      </>  
  
    )
  
  }

export default TotalsContainer