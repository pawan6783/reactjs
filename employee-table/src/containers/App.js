import React, { Component } from 'react';
import './App.css';
import EmployeeTable  from '../components/EmployeeTable';

class App extends Component {

  state = {
    employees: [
      {name: "Charlie", job: "Janitor"},
      {name: "Mac", job: "Bouncer"},
      {name: "Dee", job: "Aspiring actress"},
      {name: "Dennis", job: "Bartender"}
    ]
  }
  render(){

    let employeeList = this.state.employees.map(employee =>{
      return(
        <tr className="tr">
          <td className="td">{employee.name}</td>
          <td className="td">{employee.job}</td>
        </tr>
      );
    }
    );

    return (
      <EmployeeTable employeeList = {employeeList} />
    );

    }
}

export default App;
