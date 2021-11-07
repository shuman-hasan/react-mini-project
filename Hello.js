import React, { Component } from "react";

class Hello extends Component{

constructor(){
    super()
    this.state={name: "shuman"}
}


ChangeName(a){
    this.setState({name:a})
}



render(){
    return(
        <div>
            <button onClick ={this.ChangeName.bind(this,"I love you memu")}>ChangeName</button>
            <h1>{this.state.name}</h1>
        </div>
    )
}



}





export default Hello;