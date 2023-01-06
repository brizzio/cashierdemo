import React from 'react'
import styled from 'styled-components'
import {Linkedin} from '@styled-icons/boxicons-logos/Linkedin'
import { Button } from '../CustomUi/Elements'
import TimeStyled from '../utils/TimeStyled'


const Linked = styled(Linkedin)`
  color: white;
  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
`

const Wrapper = styled.div`

    height:40px;
    align-items:center;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right:10px;
    background-color:white;
    min-width:100vw;
    
    

`
const MarelLogo = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    height: 100%;
    color:white;
    gap:5px;
    margin-left:10px;
    background-color:black;
`

function HeaderStyled() {
  return (
    <Wrapper>
        <MarelLogo>
            <div>MAREL</div>
            <Linked size="24" />
        </MarelLogo>
        <div id='menu' className='flex flex-row items-center gap-2'>

        <Button variant="main" size="small" className="min-w-9" onClick={() =>'function'}>Prezzi Regolari</Button>

        <Button variant="main" size="small" className="min-w-9" onClick={() =>'function'}>Prezzi Promozionali</Button>

        <Button variant="main" size="small" className="min-w-9" onClick={() =>'function'}>Amministrativo</Button>

        <Button variant="main" size="small" className="min-w-9" onClick={() =>'function'}>Utente</Button>
          
        </div>
        
    </Wrapper>
  )
}

export default HeaderStyled