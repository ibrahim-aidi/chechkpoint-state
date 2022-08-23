import React, { Component } from 'react'
import "./App.css" 
import Person from './Components/Person'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show : false ,
    };
  }
  
    handleclick=()  =>  this.setState({show : !this.state.show})
  
  render() {
    return (
      <div>
         
         <button onClick={this.handleclick}>toggle</button>
         {this.state.show?<Person/>:(<h2>oups cliquer sur le bouton pour afficher le contenu</h2>)}

      </div>
    )
  }
}
