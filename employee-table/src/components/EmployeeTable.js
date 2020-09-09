import React from 'react';
import './EmployeeTable.css'

const EmployeeTable = props => {
    
    return(
      <table className="table">
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
          {props.employeeList}
      </table>
    )
}

export default EmployeeTable;