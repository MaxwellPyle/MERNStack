import './App.css';
import ProductForm from './components/ProductForm';
import AllProducts from './components/AllProducts';
import OneProductDetails from './components/OneProductDetail';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container" >
        <h1>Product Manager: </h1>
        <Link to="/" className="btn btn-info m-1">Home</Link>
        <Link to="/new" className="btn btn-secondary m-1">Add Ninja</Link>
        <Switch>
          <Route exact path="/">
            <ProductForm></ProductForm>
            <AllProducts></AllProducts>
          </Route>
          <Route exact path="/new">
            <ProductForm></ProductForm>
          </Route>
          <Route exact path="/api/products/:_id">
            <OneProductDetails></OneProductDetails>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
