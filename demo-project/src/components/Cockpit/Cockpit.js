import React from 'react';

const Cockpit = props => {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>This is really working</p>
            <button
                onClick = {props.clicked}
            >TogglePerson</button>
        </div>
    );
}

export default Cockpit;