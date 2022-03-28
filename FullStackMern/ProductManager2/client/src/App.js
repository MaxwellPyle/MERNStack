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
import EditProductForm from "./components/EditProductForm"


function App() {

  //submit form variable
  let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Product Manager!</h1>
        <Link to="/">Home</Link>
        <Switch>
          <Route exact path="/">
            <ProductForm formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></ProductForm>
            <AllProducts formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></AllProducts>
          </Route>
          <Route exact path="/product/:id">
            <OneProduct></OneProduct>
          </Route>
          <Route exact path="/edit/:id">
            <EditProductForm></EditProductForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
