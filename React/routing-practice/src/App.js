import logo from './logo.svg';
import './App.css';
import React from "react";
import Num from './components/Num';
import {
  BrowserRouter,
  Link, 
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path = "/home">
              <h3>Welcome to the home page!</h3>
            </Route>
            <Route exact path = "/:num">
              <Num></Num>
            </Route>
            <Route exact path = "/:num/:bgcolor">
              <Num></Num>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
