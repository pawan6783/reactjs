import React, { Component } from 'react';
import './App.css';
import EmployeeTable from '../components/EmployeeTable';
import NewEmployee from '../components/NewEmployee';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      employees: [
       // {id: "1", name: "abc", job: "eng"}
      ]
    }
    
  }

  newEmployee = {}

  nameChangeHandler(event){
    const {name,value} = event.target;
     
     this.newEmployee[name]=value; 

    if(name==="job"){
      this.newEmployee["id"]=this.newEmployee["name"]+this.newEmployee["job"];
    }
    
  }
  
  

  addEmployeeHandler(event) {
    event.preventDefault();

    const tempEmployees = [...this.state.employees];
   
    console.log(this.newEmployee);
    tempEmployees.push(this.newEmployee);
    
    this.setState({
      employees: tempEmployees
    });
    this.newEmployee = {};
  }

  deleteEmployeeHandler(index){
    const tempEmployees = [...this.state.employees];
   
    console.log(this.newEmployee);
    
    tempEmployees.splice(index,1);
    
    this.setState({
      employees: tempEmployees
    });

  }

  render(){

    let employeeList = this.state.employees.map((employee,index) => {
      return(
        <tr className="tr"
            key={employee.id}
        >
          <td className="td">{employee.name}</td>
          <td className="td">{employee.job}</td>
          <td className="td">
            <button
            onClick={()=>this.deleteEmployeeHandler(index)}
            >Delete</button>
          </td>
        </tr>
      );
    });
    return (
      <div className="">
        <EmployeeTable employeeList={employeeList}
        ></EmployeeTable>
        <NewEmployee
        addEmployee = {(event)=> this.nameChangeHandler(event)}
        clicked = {(event)=> this.addEmployeeHandler(event)}
        ></NewEmployee>
      </div>
    );
  }
 
}

export default App;
