import React from "react";
import ReactDOM from "react-dom";

class Nazwa extends React.Component{
  constructor(props){
    super(props);
    this.state = {boat:"Bro"}
  }
  handleEvent(event){
    const name = event.target.value;
    this.setState({boat: name});
  }
  render(){
    return<>
      <h1>Welcome aboard ! {this.state.boat}</h1>
      <input type="text" onChange={(event) => this.handleEvent(event)}/>
    </> 

  }
}
const all = (
  <Nazwa />
)
ReactDOM.render(all ,document.getElementById("root"));