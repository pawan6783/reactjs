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

  switchNameHandler = (newName) =>{
    // console.log("Button clicked");
    this.setState({
      persons: [
        {name: newName, age: 25},
        {name: 'henry', age:30 },
        {name: 'john', age: 22}
      ]
    });
  }

  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        {name: 'max', age: 25},
        {name: event.target.value, age:30 },
        {name: 'john', age: 22}
      ]
    });
  }
  render(){

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    }

    return(
     
      <div className="App">
          <h1>Hello React!</h1> 

          <button 
          style={style}
          onClick={this.switchNameHandler.bind(this,'carla')}>SwitchName</button>

          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={() => this.switchNameHandler('markow')}/>
          
          <Person 
            name = {this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangeHandler}  > <p>I like to play football</p></Person>
          
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
          />
           
      </div>
  
    //  React.createElement('div',null,React.createElement('h1',{className: 'App'},'Hello World!'))

    );
  }
}

export default App;
