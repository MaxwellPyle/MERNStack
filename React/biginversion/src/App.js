import React from 'react';
import './App.css';
import PersonComponent from './components/PersonComponent';


function App() {
  return (
    <div className="App">
      <PersonComponent firstName={"Leonard"} lastName={"Smith"} age={22} hairColor={"Green"}></PersonComponent>
      <PersonComponent firstName={"Tabitha"} lastName={"Smith"} age={44} hairColor={"Blue"}></PersonComponent>
      <PersonComponent firstName={"Tod"} lastName={"Smith"} age={33} hairColor={"Red"}></PersonComponent>
      <PersonComponent firstName={"Ben"} lastName={"Smith"} age={11} hairColor={"Bald"}></PersonComponent>
    </div>
  );
}

export default App;