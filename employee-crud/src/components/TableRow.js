import React from 'react';
const TableRow = props => {
    return(
        <tr className="tr"
        >
          <td id="nameCol" className="td">{props.emp.name}</td>
          <td id="jobCol" className="td">{props.emp.job}</td>
          <td id="buttonCol" className="td">
            <button id="deleteButton"
            onClick={props.clicked}
            >Delete</button>
          </td>
        </tr>
    );
}

export default TableRow;