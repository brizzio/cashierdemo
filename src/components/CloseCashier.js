import React, { useState , useRef, useEffect} from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { Button } from "./CustomUi/Elements";
import useAuth from "../context/hooks/useAuth";
import { useNavigate } from "react-router-dom";




const CloseCashier = (props) => {

    const { handleLogout } = useAuth()
    const navigate = useNavigate();

   
    const [showModal, setShowModal] = useState(false);
    const [showKeyboard, setShowKeyboard] = useState(false);
    const [inputs, setInputs] = useState({});
    const [layoutName, setLayoutName] = useState("default");
    const [inputName, setInputName] = useState("default");
    const [logoutDone, setLogoutDone] = useState(false);


  const keyboard = useRef();

  useEffect(() => {
    if (logoutDone) {
      console.log('vai navegar no logout')
      navigate("/login")
    }
  }, [logoutDone]);

  const logout = () => {
    //Prevent page reload
    //event.preventDefault();
    console.log('logout', inputs)
    
    //clean-up
    handleLogout()
    setLogoutDone(true)
    setShowModal(false);
    
    

       
  };


  const onChangeAll = inputs => {
    /**
     * Here we spread the inputs into a new object
     * If we modify the same object, react will not trigger a re-render
     */
    setInputs({ ...inputs });
    //console.log("Inputs changed", inputs);
    localStorage.setItem('newClientForm', JSON.stringify(inputs))
    let fullName = inputs.name + " " + inputs.lname
    localStorage.setItem('client', JSON.stringify(fullName.trim()))
  };

  const handleShift = () => {
    const newLayoutName = layoutName === "default" ? "shift" : "default";
    setLayoutName(newLayoutName);
  };

  const onKeyPress = button => {
    //console.log("Button pressed", button);

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
        <Button variant="primary" size="small" className="h-full mb-1 min-w-full mt-auto" onClick={() => setShowModal(true)}>{props.buttonText}</Button>
        
        {showModal ? (
          <>
          <div id="modal-bg" className="flex flex-col h-screen w-screen justify-start items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-300">
            <div className="flex w-5/6 h-[36rem] justify-center items-center overflow-x-hidden overflow-y-hidden outline-none focus:outline-none mt-3 shadow">
              <div className="relative border-2 h-full my-6 mx-auto w-full">
                  <div className=" h-full border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-visible">
                    <div className="flex items-start justify-between min-h-4 p-3 border-b border-solid border-gray-300 rounded-t ">
                      <h3 className="text-xl font=semibold">{props.buttonText}</h3>
                      <Button variant="main" size="small" className="min-w-9" onClick={() => setShowKeyboard(s=>!s)}>TASTIERA</Button>
                      <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setShowModal(false)}
                      >
                      <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 ">
                        X
                      </span>
                      </button>
                      
                      </div>
                        <div className="relative p-6 flex-auto">
                            <div>Chiusura della sessione del cassa</div>

                            <Button variant="primary" size="small" className="h-8 mb-1 w-64 mt-auto" onClick={() => logout()}>{props.buttonText}</Button>
                            
                          </div>
                          {/* <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b gap-2">
                          <Button variant="main" size="small" className="min-w-5" onClick={() => setShowModal(false)}>CHIUDI</Button>

                          <Button variant="main" size="small" className="min-w-6" onClick={() => handleSubmit()}>REGISTRA</Button>
                              
                          </div> */}
                      </div>
                      {showKeyboard?
                            <div style={{ 
                              position:'absolute',
                              display:'flex', 
                              flexDirection:'row',
                              alignItems:'center',
                              justifyContent:'center' , 
                              width: '100%',
                              height:'240px',
                              bottom:'0px',
                              left: '0',
                              overflow:'visible'
                              }}>
                              
                              <Keyboard
                              keyboardRef={r => (keyboard.current = r)}
                              inputName={inputName}
                              layoutName={layoutName}
                              onChangeAll={onChangeAll}
                              onKeyPress={onKeyPress}
                                
                                />
                                
                            </div>:null
                            }
                  </div>
                </div>
                
            </div>
          </>
        ) : null}
      </>
    );
  };
  
  export default CloseCashier;