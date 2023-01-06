import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Logo} from '../../icons/bizerba-logo.svg'
import TimeStyled from '../utils/TimeStyled'




const Wrapper = styled.div`
    height:40px;
    min-width:100%;
    align-items:center;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right:5px;
    background-color:white; 
    color:white;
    position: fixed;
    z-index:1;
    bottom: 0;
    //border-top:1px solid grey;
    

`
const MessageStyled = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    height: 100%;
    color:black;
    margin-left:10px;
`

const Spinner = ()=>{
  return (
    
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
   
  )
}

const Beacon = ()=>{
  return (
    <div class="rounded-full bg-gray-700 w-4 h-4 absolute left-3 top-3 animate-ping"></div>
  )
}


function FooterStyled() {
  return (
    <>
    
      
      <Wrapper>
          <MessageStyled>
              <TimeStyled textColor="black"/>
          </MessageStyled>
          <div style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"flex-end",
            width: "8%"
            
          }}>

            <Logo fill="black" style={{
              scale:"0.7",
              
            }}/>
          
          </div>
      </Wrapper>
    </>
  )
}

export default FooterStyled