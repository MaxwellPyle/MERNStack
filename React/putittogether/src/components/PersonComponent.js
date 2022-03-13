import React, { Component } from 'react';
class PersonComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    

    this.LikePersonHandler = ()=>{
        console.log("liking the person");
        this.setState({age: this.state.age + 1})

        }
    }

    render(){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>{this.state.age}</p>
                <p>{this.props.hairColor}</p>
                <button onClick={this.LikePersonHandler}>add year</button>
            </div>
        );

    }
}

export default PersonComponent;