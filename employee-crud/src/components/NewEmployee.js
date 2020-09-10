import React from 'react';
const NewEmployee = props => {
    return(
        <div>
            <h1>Add New Employee</h1>
            <div>
                    <label>Name</label>
                    <input 
                    type="text" 
                    name="name"
                    onChange={props.addEmployee}
                    ></input>
                </div>
                <div>
                    <label>Job</label>
                    <input 
                    type="text" 
                    name="job"
                    onChange={props.addEmployee}
                    ></input>
                </div>
                <button onClick={props.clicked}>Submit</button>
        
            </div>
    );
}

export default NewEmployee;
