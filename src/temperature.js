import React from "react";
import ReactDOM from "react-dom";

class Temp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Celcious: 0,
      Fahrenheit: 0,
    };  
  }
tempconverter(value, scale){
  switch(scale){
    case "Celcious":
      this.setState({Fahrenheit: value * 1.8 + 32, Celcious: value});
    return;
    case "Fahrenheit":
      this.setState({Celcious: (value - 32) * 1.8, Fahrenheit: value});
    return;
  }
}
render(){
  return<>
  <div id="zimno">
  <p>Celcious</p>
  <input type="text" value={this.state.Celcious} onChange={(event) => this.tempconverter(event.target.value, "Celcious")}/>
  <p>Fahrenheit</p>
  <input type="text" value={this.state.Fahrenheit} onChange={(event) => this. tempconverter(event.target.value, "Fahrenheit")}/>
  </div>
  </>
  }
}
export default Temp;