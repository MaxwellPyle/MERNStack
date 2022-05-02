import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import components to display 
import AllPets from './components/AllPets'
import { PetForm } from './components/PetForm'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Pet Shelter</h1>
      <Link to={"/add"}>Add a pet!</Link>
      <Switch>
        <Route exact path="/">
          <AllPets></AllPets>
        </Route>
        <Route exact path="/details/:id">
          
        </Route>
        <Route exact path="/add">
          <PetForm></PetForm>
        </Route>

      </Switch>
    </div>
    
    
    </BrowserRouter>
  );
}

export default App;
