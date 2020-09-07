import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      { id: 'p1', name: 'max', age: 22},
      { id: 'p2', name: 'henry', age: 30},
      { id: 'p3', name: 'john', age: 25}
    ],
    otherState: 'some other state',
    showPerson: true
  }

  

  nameChangeHandler = (event,id) =>{

    const personIndex = this.state.persons.findIndex(
      p => p.id === id
    );

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  toggleNameHandler = () =>{

    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  }

  deletePersonHandler = (personIndex) => {
    const person = [...this.state.persons];
    person.splice(personIndex,1);
    this.setState({
      persons: person
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

    let persons = null;

    if(this.state.showPerson){
        
      persons = (
        <div>
          {
            this.state.persons.map((person,index) => {
              return(
                <Person 
                key = {person.id}
                name = {person.name}
                age = {person.age} 
                changed = {(event) => {this.nameChangeHandler(event,person.id)}}
                click = {() => {this.deletePersonHandler(index)}} />
              )
            })
          }
        </div>
      );
      
    }

    return(
      
      <div className="App">
        <h1>Hello React!</h1> 

        <button 
        style={style}
        onClick={this.toggleNameHandler}>TogglePerson</button>
        
        {persons}   
      </div>

    //  React.createElement('div',null,React.createElement('h1',{className: 'App'},'Hello World!'))

    );
  }
}

export default App;
