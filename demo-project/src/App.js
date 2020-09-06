import React, {useState} from 'react';
import Person from './Person/Person';
import './App.css';

const App = props => {

  const [personState, setPersonState] = useState({

    persons: [
      {name: 'max', age: 22},
      {name: 'john', age: 25},
      {name: 'eran', age: 27}
    ],
  });

  const [otherState,setOtherState] = useState({
    otherState: 'some other state'
  });

  console.log(personState,otherState);

  const switchNameHandler = () =>{

    setPersonState({
      persons: [
        {name: 'henry', age: 22},
        {name: 'john', age: 25},
        {name: 'eran', age: 30}
      ]
    });
  }

  return(
    <div className="App">
      <Person name={personState.persons[0].name} age={personState.persons[0].age}></Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>I like football</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
      <button onClick={switchNameHandler}>switchName</button>
    </div>
  );
}
export default App;
