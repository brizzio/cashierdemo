import React , { useContext } from 'react'
import  { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import useAuth from '../context/hooks/useAuth';

export default function Login () {

  const {authenticated, handleLogin} = useAuth()
  console.log(authenticated)

  const [inputs, setInputs] = useState({});
  const [layoutName, setLayoutName] = useState("default");
  const [inputName, setInputName] = useState("default");

  const [isSubmitted, setIsSubmitted] =useState(false)


  const keyboard = useRef();

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    console.log(inputs)
    var { email, password } = inputs

    if(email && password) {
      handleLogin({"email":email, "password":password})
      setIsSubmitted(true);
    }
    
    setIsSubmitted(false);

       
  };

 const onChangeAll = inputs => {
    /**
     * Here we spread the inputs into a new object
     * If we modify the same object, react will not trigger a re-render
     */
    setInputs({ ...inputs });
    console.log("Inputs changed", inputs);
  };

  const handleShift = () => {
    const newLayoutName = layoutName === "default" ? "shift" : "default";
    setLayoutName(newLayoutName);
  };

  const onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = event => {
    const inputVal = event.target.value;

    setInputs({
      ...inputs,
      [inputName]: inputVal
    });

    keyboard.current.setInput(inputVal);
  };

  const getInputValue = inputName => {
    return inputs[inputName] || "";
  };



  return (

    <>

    <div style={{
          display:'flex',
          flexDirection:'column',
         
          height: '100vh'
        }}>
      <div style={{
          display:'flex',         
          height: 'calc(100vh - 40vh)',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <div style={{
          display:'flex',
          flexDirection:'column',
          gap:'1em',         
          width: 'calc(100vh - 60vh)',
          backgroundColor:'whitesmoke',
          borderRadius:'8px',
          padding:'2em'

        }}>
          <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'1em'}}>
            <label>Utente</label>
            <input style={{height:'3em', borderRadius:'8px', padding:'0.3em'}}
              id="email"
              value={getInputValue("email")}
              onFocus={() => setInputName("email")}
              placeholder={"Inserire La tua Email"}
              onChange={onChangeInput}
            />
            <label>Password</label>
            <input style={{height:'3em', borderRadius:'8px', padding:'0.3em'}}
              id="password"
              value={getInputValue("password")}
              onFocus={() => setInputName("password")}
              placeholder={"sicurezza"}
              onChange={onChangeInput}
            />
            <button type="submit" style={{height:'3em', backgroundColor:'wheat', border:'none',borderRadius:'8px',}}>accessa</button>



          </form>
            
        </div>
        
      </div>
      <div style={{
          display:'flex',
          flexDirection:'column',      
          width: '100vw',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        
        <Keyboard
          keyboardRef={r => (keyboard.current = r)}
          inputName={inputName}
          layoutName={layoutName}
          onChangeAll={onChangeAll}
          onKeyPress={onKeyPress}
          
        />
        
      </div>
    </div>
    </>
    
  )
  
}







