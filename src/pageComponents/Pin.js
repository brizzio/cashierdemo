import React, { Component } from "react";
import PinInput from "react-pin-input";
import moment from "moment";

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../index.css";

function doDate() {
    //var str = "";
    //var now = new Date();
    //str = now.toDateString() + " " + now.toLocaleTimeString();
    var pinTime = moment().format("hh:mm:ss A");
    if (document.getElementById("todaysDate"))
      document.getElementById("todaysDate").innerHTML = pinTime;
  }
  
  setInterval(doDate, 1000);



class Pin extends Component {

    

  state = {
    input: "",
    error:false,
    currentTime: moment().format("LT"),
    layoutName: "default"
  };

  onChange = (input) => {
    this.setState({
      input: input
    });
  };

  onKeyPress = (button) => {
    console.log("Button pressed", button);

    if (button === "{clear}") {
      this.handleClear();
      return;
    }

    if (button === "{bksp}") {
      if (this.pin.elements[3].state.value) {
        this.pin.elements[3].state.value = "";
        return;
      }
      if (this.pin.elements[2].state.value) {
        this.pin.elements[2].state.value = "";
        return;
      }
      if (this.pin.elements[1].state.value) {
        this.pin.elements[1].state.value = "";
        return;
      }
      if (this.pin.elements[0].state.value) {
        this.pin.elements[0].state.value = "";
        return;
      }
    }

    if (this.pin.elements[2].state.value) {
      this.pin.elements[3].state.value = button;
      setTimeout(this.onSubmitHandler, 10);
      return;
    }
    if (this.pin.elements[1].state.value) {
      this.pin.elements[2].state.value = button;
      return;
    }
    if (this.pin.elements[0].state.value) {
      this.pin.elements[1].state.value = button;
      return;
    }
    this.pin.elements[0].state.value = button;
  };

  handleClear = () => {
    this.setState(
      {
        input: ""
      },
      () => {
        this.keyboard.clearInput();
      }
    );

    this.pin.clear();
  };

  handleShift = () => {
    let layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  };

  onChangeInput = (event) => {
    let input = event.target.value;
    this.setState(
      {
        input: input
      },
      () => {
        this.keyboard.setInput(input);
      }
    );
  };

  onSubmitHandler = (e) => {
    this.pin.values = e;
    if (this.state.input == this.props.code) {
      //window.localStorage.setItem("pin", this.state.input);
      //window.location.href = "https://localhost:3000/home";
      console.log('passou...')
      this.props.close()
    } else {
      console.log("Invalid PIN!", "Pin you enter didn't match. Try again", "error");
            
      this.handleClear();
    }
  };

  

  inputStyle = {
    width: "100%",
    height: "100px",
    padding: "10px",
    fontSize: 20,
    border: 0,
    background: "#000",
    margin: "30px 0px 0px",
    color: "#fff",
    textAlign: "Center"
  };

  render() {
    return (
      <div className="flex flex-col container w-full items-center justify-center">
        <div className="flex flex-col w-2/6 items-center justify-center">
                <div className="">
                <h2 id="todaysDate"> </h2>
                </div>
                <PinInput
                length={4}
                focus
                ref={(p) => (this.pin = p)}
                type="numeric"
                inputMode="number"
                pattern="\d*"
                //value={this.state.input}
                style={{padding: '10px', width:'150'}}  
                inputStyle={{borderColor: 'blue',
                             backgroundColor: 'white',
                             borderRadius:'7px',
                             boxShadow: '4px 2px lightblue',
                             marginRight:'3px',
                            padding:'5px',
                            height:'50px'}}
                onChange={this.onChange.bind(this)}
                onComplete={this.onSubmitHandler}

                />

                <input
                value={this.state.input}
                style={this.inputStyle}
                placeholder={""}
                onChange={(e) => this.onChangeInput(e)}
                className='hidden'
                />
                <Keyboard
                keyboardRef={(r) => (this.keyboard = r)}
                layoutName={this.state.layoutName}
                theme={
                    "hg-theme-default hg-theme-numeric hg-layout-numeric numeric-theme"
                }
                layout={{
                    default: ["1 2 3", "4 5 6", "7 8 9", "{clear} 0 {bksp}"]
                }}
                mergeDisplay
                display={{
                    "{clear}": "Clear",
                    "{bksp}": "&#8592"
                }}
                maxLength={4}
                onChange={(input) => this.onChange(input)}
                onKeyPress={(button) => this.onKeyPress(button)}
                onComplete={this.onSubmitHandler}
                />
        </div>
      </div>
    );
  }
}
export default Pin;