import './App.css';
import React, {useState} from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import components 
import ProductForm from "./components/ProductForm"
import AllProducts from "./components/AllProducts"
import OneProduct from "./components/OneProduct"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Product Manager!</h1>
        <Link to="/">Home</Link>
        <Switch>
          <Route exact path="/">
            <ProductForm></ProductForm>
            <AllProducts></AllProducts>
          </Route>
          <Route exact path="/product/:id">
            <OneProduct></OneProduct>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
