import React, { useState , useRef} from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { Button } from "./CustomUi/Elements";



const NewClient = (props) => {

    

    const inputsModel= {
        name:'',
        lname:'',
        address:'',
        city:''
    }

    const inputsFormInit = ()=>{
        if (localStorage.getItem("newClientForm") === null) {
            return inputsModel
        }

        return JSON.parse(localStorage.getItem("newClientForm"))

    }
   

   
    const [showModal, setShowModal] = useState(false);
    const [inputs, setInputs] = useState(inputsFormInit());
    const [layoutName, setLayoutName] = useState("default");
    const [inputName, setInputName] = useState("default");


  const keyboard = useRef();

  const handleSubmit = () => {
    //Prevent page reload
    //event.preventDefault();
    console.log('inputs', inputs)
    props.save(inputs)
    
    //clean-up
    setShowModal(false);
    localStorage.removeItem("newClientForm")
    setInputs({})

       
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
        <Button variant="primary" size="small" className="min-h-2/3 w-2/3 mt-auto " onClick={() => setShowModal(true)}>{props.buttonText}</Button>
        
        {showModal ? (
          <>
          <div id="modal-bg" className="flex flex-col h-screen w-screen justify-start items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-300">
                <div className="flex w-5/6 h-4/6 justify-center items-center overflow-x-hidden overflow-y-hidden outline-none focus:outline-none mt-3 shadow">
                <div className="relative h-full my-6 mx-auto w-full">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between min-h-4 p-3 border-b border-solid border-gray-300 rounded-t ">
                        <h3 className="text-xl font=semibold">{props.buttonText}</h3>
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
                        <form  onSubmit={handleSubmit} className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full gap-2">
                            
                            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                            id="name"
                            value={getInputValue("name")}
                            onFocus={() => setInputName("name")}
                            onChange={onChangeInput}  
                            placeholder={"Nome"}
                                                          
                            />
                        
                            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                            id="lname"
                            value={getInputValue("lname")}
                            onFocus={() => setInputName("lname")}
                            onChange={onChangeInput} 
                            placeholder="Cognome"/>
                            
                            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black col-span-2" 
                            id="address"
                            value={getInputValue("address")}
                            onFocus={() => setInputName("address")}
                            onChange={onChangeInput} 
                            placeholder="Indirizzo"/>
                            
                            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                            id="city"
                            value={getInputValue("city")}
                            onFocus={() => setInputName("city")}
                            onChange={onChangeInput} 
                            placeholder="Citta"/>
                            
                        </form>
                    </div>
                    <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b gap-2">
                    <Button variant="main" size="small" className="min-w-5" onClick={() => setShowModal(false)}>CHIUDI</Button>

                    <Button variant="main" size="small" className="min-w-6" onClick={() => handleSubmit()}>REGISTRA</Button>
                        
                    </div>
                    </div>
                </div>
                </div>
                <div style={{     
                    width: '100vw',
                    height:'100px',
                    position: 'absolute',
                    bottom: '170px',
                    left: '0',
                    zIndex:51
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
        ) : null}
      </>
    );
  };
  
  export default NewClient;