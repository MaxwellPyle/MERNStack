import './App.css';
import React, {useState} from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllPets from './components/AllPets'
import PetForm from './components/PetForm'
import EditPet from './components/EditPet'
import PetDetails from './components/PetDetails'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Pet Shelter</h1>
      <Link to={"/"}>Home</Link> ||
      <Link to={"/add"}>Add a pet!</Link>
      <Switch>
        <Route exact path="/">
          <AllPets></AllPets>
        </Route>
        <Route exact path="/add">
          <PetForm></PetForm>
        </Route>
        <Route exact path="/edit/:id">
          <EditPet></EditPet>
        </Route>
        <Route exact path="/details/:id">
          <PetDetails></PetDetails>
        </Route>
      </Switch>
    </div>
    
    
    </BrowserRouter>
  );
}

export default App;
