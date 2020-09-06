import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      {name: 'max', age: 22},
      {name: 'henry', age: 30},
      {name: 'john', age: 25}
    ],
    otherState: 'some other state'
  }

  switchNameHandler = () =>{
    // console.log("Button clicked");
    this.setState({
      persons: [
        {name: 'eran', age: 25},
        {name: 'henry', age:30 },
        {name: 'john', age: 22}
      ]
    });
  }
  render(){

    return(
     
      <div className="App">
           <h1>Hello World!</h1> 
           <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
           <Person name = {this.state.persons[1].name} age={this.state.persons[1].age}>I like to play football</Person>
           <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
           <button onClick={this.switchNameHandler}>SwitchName</button>
      </div>
  
    //  React.createElement('div',null,React.createElement('h1',{className: 'App'},'Hello World!'))

    );
  }
}

export default App;
