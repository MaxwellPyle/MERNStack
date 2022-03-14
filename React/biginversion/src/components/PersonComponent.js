import React from "react";


const PersonComponent = props => {
    return <>
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>{props.state.age}</p>
            <p>{props.hairColor}</p>
        </div>
        
        </>
    
}
export default PersonComponent;