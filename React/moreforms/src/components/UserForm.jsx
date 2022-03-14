import React, { useState } from 'react';

const UserForm = () => {
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")


    const ShowFirstNameError = () => {
        if(firstName.length === 0) {
            return <p className="text-danger">First Name is equired!</p>
        } else if(firstName.length < 2) {
            return <p className="text-danger">First Name must be at least 2 characters!</p>
        }
    }
    const ShowLastNameError = () => {
        if(lastName.length === 0) {
            return <p className="text-danger">Last Name is required!</p>
        } else if(lastName.length < 2) {
            return <p className="text-danger">Last Name must be at least 2 characters!</p>
        }
    }
    const ShowEmailError = () => {
        if(email.length === 0) {
            return <p className="text-danger">Email is required!</p>
        } else if(email.length < 5) {
            return <p className="text-danger">Email must be at least 5 characters!</p>
        }
    }

    const ShowPasswordError = () => {
        if(password.length === 0) {
            return <p className="text-danger">Password is required!</p>
        } else if(password.length < 8) {
            return <p className="text-danger">Password must be at least 8 characters!</p>
        } 
    }
    const ShowConfirmPasswordError = () => {
        if (confirmPassword.length === 0) {
            return <p className="text-danger">Confirm Password is required!</p>
        } else if(confirmPassword != password) {
            return <p className="text-danger">Passwords must match!</p>
        }
    }

    return ( 
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) =>setFirstName(e.target.value)} />
                {ShowFirstNameError()}
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                {ShowLastNameError()}
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                {ShowEmailError()}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                {ShowPasswordError()}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                {ShowConfirmPasswordError()}
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;