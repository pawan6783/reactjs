import React, { Component } from 'react';
import './App.css';
import EmployeeTable from '../components/EmployeeTable';
import NewEmployee from '../components/NewEmployee';
import TableRow from '../components/TableRow';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      employees: [
       // { name: "abc", job: "eng"}
      ]
    }
    
  }

  newEmployee = {}

  nameChangeHandler(event){
    const {name,value} = event.target;

    

    if(value==='joker'){
      throw new Error("string should have atleast three characters");
    }
    else{
      this.newEmployee[name]=value; 
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
        <TableRow 
        emp={employee}
        clicked = {(index) => {this.deleteEmployeeHandler(index)}}>
        </TableRow>
      );
    });
    return (
      <div className="">
        <EmployeeTable employeeList={employeeList}
        ></EmployeeTable>
        <ErrorBoundary>
        <NewEmployee
        addEmployee = {(event)=> this.nameChangeHandler(event)}
        clicked = {(event)=> this.addEmployeeHandler(event)}
        ></NewEmployee>
        </ErrorBoundary>
       
      </div>
    );
  }
 
}

export default App;
