import React from 'react';

const Cockpit = props => {
    return(
        <div>
            <h1>Hi! I'm React App</h1>
            <p>This is really working</p>
            <button
                onClick = {props.clicked}
            >TogglePerson</button>
        </div>
    );
}

export default Cockpit;