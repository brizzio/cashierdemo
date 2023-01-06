import React, { useState , useRef} from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { Button } from "./CustomUi/Elements";
import NumericKb from "./CustomUi/NumericKb";

// BUTTON --- ULTIMO CARRELLO

const SuspendCashier = (props) => {

    

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
    const [showKeyboard, setShowKeyboard] = useState(true);
    const [inputs, setInputs] = useState(inputsFormInit());
    const [layoutName, setLayoutName] = useState("default");
    const [inputName, setInputName] = useState("default");
    const [pinCode, setPinCode] = useState('123456')


  const keyboard = useRef();

  const handleSubmit = () => {
    //Prevent page reload
    //event.preventDefault();
    console.log('inputs', inputs)
    props.save(inputs)
    
    //clean-up
    setShowModal(false);
    localStorage.removeItem("productPicked")
    setInputs({})

       
  };


  const onChangeAll = inputs => {
    /**
     * Here we spread the inputs into a new object
     * If we modify the same object, react will not trigger a re-render
     */
    setInputs({ ...inputs });
    //console.log("Inputs changed", inputs);
    localStorage.setItem('productPicked', JSON.stringify(inputs))
   
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
                      {/* <Button variant="main" size="small" className="min-w-9" onClick={() => setShowKeyboard(s=>!s)}>TASTIERA</Button> */}
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
                      {/* Numeric imputs */}
                        <div className="flex flex-col h-full w-full border-2 items-center">
                            <div className="w-96 h-auto">
                              <label className=" ml-4 block mb-2 text-xl font-medium text-gray-900 dark:text-white"> Inserire il codice della carta</label>
                              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-semibold text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-4 my-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="_" required/>

                              {showKeyboard?<NumericKb />:null}
                            </div>
                            
                            <div className="flex flex-row h-full items-center justify-end pr-4">
                              <Button variant="primary" size="small" className="h-10 w-40 mb-1  ml-3" onClick={props.back}>INDIETRO</Button>
                              <Button variant="primary" size="small" className="h-10 w-40 mb-1  ml-3" onClick={() => (true)}>REGISTRA</Button>
                            </div>
                        </div>
                        
                      </div>
                          {/* <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b gap-2">
                          <Button variant="main" size="small" className="min-w-5" onClick={() => setShowModal(false)}>CHIUDI</Button>

                          <Button variant="main" size="small" className="min-w-6" onClick={() => handleSubmit()}>REGISTRA</Button>
                              
                          </div> */}
                      </div>  
                    </div>
                  </div>
            </div>
          </>
        ) : null}
      </>
    );
  };
  
  export default SuspendCashier;