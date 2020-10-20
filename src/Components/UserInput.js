import React from 'react';


const userInput = (props) => {

    return (
        <div>
            <label>User Name:</label>
            <input type="text" onChange={props.changed} value={props.name} />

        </div>

    )


};

export default userInput;