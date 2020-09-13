import React from 'react';
import './EmployeeTable.css'

const EmployeeTable = props => {
    
    return(
      <table className="table">
          <tr>
            <th id="name">Name</th>
            <th id="job">Job</th>
          </tr>
          {props.employeeList}
      </table>
    )
}

export default EmployeeTable;