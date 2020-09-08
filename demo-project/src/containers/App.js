import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit'

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

    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'

    // }

    let persons = null;

    if(this.state.showPerson){
        
      persons = (
            <Persons
              persons = {this.state.persons}
              clicked = {this.deletePersonHandler}
              changed = {this.nameChangeHandler}
            ></Persons>
      );
      
    }

    return(
      
      <div className="App">
        <Cockpit
          showPersons = {this.state.showPerson}
          persons = {this.state.persons}
          clicked = {this.toggleNameHandler}
        ></Cockpit>
        {persons}   
      </div>

    //  React.createElement('div',null,React.createElement('h1',{className: 'App'},'Hello World!'))

    );
  }
}

export default App;
