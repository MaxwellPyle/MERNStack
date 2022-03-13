import React, { Component } from 'react';
class PersonComponent extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>{this.props.age}</p>
                <p>{this.props.hairColor}</p>
            </div>
        );

    }
}

export default PersonComponent;