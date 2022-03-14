import React, { useState } from "react";

const UserForm = (props) => {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("")

    const createUser = (user) => {
        user.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };

    return(
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ (user) => setFirstName(user.target.value) }value={ firstName } />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (user) => setLastName(user.target.value) } value={ lastName } />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ (user) => setEmail(user.target.value) }value={ email } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (user) => setPassword(user.target.value) }value={ password }/>
                </div>
                <div>
                    <label>First Name: </label>
                    <input type="password" onChange={ (user) => setConfirmPassword(user.target.value) }value={ confirmPassword }/>
                </div>
                <input type="submit" value="Create User" />
            </form>
            <h3>First Name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
            <h3>Email: {email}</h3>
        </>
    )
}

export default UserForm