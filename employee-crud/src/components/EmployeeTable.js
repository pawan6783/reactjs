import React from 'react';
import './EmployeeTable.css';
const EmployeeTable = props => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                 {props.employeeList}
            </tbody>
        </table>
    );
}

export default EmployeeTable;