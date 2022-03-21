import './App.css';
import SearchForm from './components/SearchForm';
import Detail from './components/Detail';
import React from "react";
import {
  BrowserRouter,
  Link, 
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Luke Api Walker</h1>
        <SearchForm></SearchForm>
        <Switch>
          <Route exact path="/:category/:id">
            <Detail></Detail>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
