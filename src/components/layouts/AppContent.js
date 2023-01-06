import React , { useState , useEffect, useRef} from 'react'

import LeftPanel from '../Panels/LeftPanel'
import RightPanel from '../Panels/RightPanel'

import { ContentSectionRow, PanelFlex, PanelGridLeft, PanelGridRight } from '../Styled'


import useInfo from '../../context/hooks/useInfo'




function AppContent() {

  const info = useInfo()
  //const {newClient} =useInfo()
  
  const new_client= useRef(info.newClient)

  const[swap, setSwap]= useState(info.config.swap)
  
  const [client, setClient] = useState('')
 
  const[reload, setReload]= useState({})



  console.log('AppContent ... swap' , swap)
  console.log('AppContent ... newclient' , info.newClient)

  function handleCheck(){
    info.toggleSwap()
    setSwap(swap=>!swap)
  }

  function reloadContent(){
    
    setReload(prev=>({...prev}))
  }
  
  useEffect(() => {
    console.log('appContent effect', new_client)
    const _client = new_client.hasOwnProperty('name')? 
    new_client.name + ' ' + new_client.lname:
                  '-----'
    setClient(_client)              
}, [new_client]);


  return (
    
    <ContentSectionRow swap={swap}>
      <PanelGridLeft>
        <LeftPanel checked={swap} onChangeSwitch={()=>handleCheck()}/>
      </PanelGridLeft>
      <PanelGridRight>
        <RightPanel client={client}/>
      </PanelGridRight>
    </ContentSectionRow>
    
  )
}

export default AppContent