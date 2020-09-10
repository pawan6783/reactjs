import React from 'react';
const NewEmployee = props => {
    return(
        <div>
            <h1>Add New Employee</h1>
            <form onSubmit={props.clicked}>
                 <div>
                    <label>Name</label>
                    <input 
                    type="text" 
                    id="name"
                  //  onChange={props.addEmployee}
                    ></input>
                </div>
                <div>
                    <label>Job</label>
                    <input 
                    type="text" 
                    value={props.state.employees.age}
                   // onChange={props.addEmployee}
                    ></input>
                </div>
                <input type="submit" value="Submit"></input>
        
            </form>
        </div>     
    );
}

export default NewEmployee;
