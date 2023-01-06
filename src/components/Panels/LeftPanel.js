import React,  { useState } from 'react'
import DisplayContainer from '../PanelContainers/DisplayContainer'
import { UserStar } from '@styled-icons/remix-line'
import { Switch, Beacon } from '../CustomUi/Elements'
import { ArrowLeftRight } from '@styled-icons/bootstrap'
import { CashRegister } from '@styled-icons/fa-solid'
import { StoreMallDirectory } from '@styled-icons/material-outlined'
import { WebcamCapture } from '../webcam/Webcam'


const theme={color:{black:'#051619'}}



function LeftPanel(props) {

  

  return (
    <>
    
        
        <div id="top" className={`flex flex-row h-1/8 w-full text-${theme.color.black}`}>
                        <div className="flex flex-col w-1/6 items-center justify-center">
                          <WebcamCapture id="webimage" />
                          <Beacon />
                            
                        </div>   
                        <div className="flex flex-col 
                                    h-full w-1/4
                                    items-center justify-center gap-0">
                            <StoreMallDirectory className='w-9'/>
                            <p className="font-bold text-3xl text-slate-600 mt-0 ">001</p>
                        </div>
                        <div className="flex flex-col
                                    h-full w-1/4 
                                    items-center justify-center"> 
                            <CashRegister className='w-8'/>
                            <p className="font-bold text-3xl text-slate-600">465</p>
                        </div>
                        <div className="flex flex-col 
                                    h-full w-1/4 
                                    items-center justify-center"> 
                            <UserStar className="w-8"/>
                            <p className="font-bold text-3xl text-slate-600">15246</p>
                        </div>
                        <div className="flex flex-col 
                                    h-full w-1/4 
                                    items-center justify-center gap-1 "> 
                           <ArrowLeftRight className='w-8 mr-4'/>
                           <Switch checked={props.checked}
                           onChange={props.onChangeSwitch}/>
                        </div>
                        
                        
                                



            </div>
            <div id="center" className="flex flex-row w-full">
            <DisplayContainer />
            </div>
           

     </>
   
  )
}

export default LeftPanel