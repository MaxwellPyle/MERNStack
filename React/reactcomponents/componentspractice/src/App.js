import React from 'react';
import './App.css';
import PersonComponent from './components/PersonComponent.js';

var peopleArr =[
  {"firstName":"Leonard", "lastName":"Smith", "age":22, "hairColor":"Green"},
  {"firstName":"Alfred", "lastName":"Romeo","age":16,"hairColor":"N/A"},
  {"firstName":"Tabitha", "lastName":"Johnson","age":26,"hairColor":"Blonde"},
  {"firstName":"DaQuan", "lastName":"Jefferson","age":21,"hairColor":"Black"}
]

function App() {
  return (
    <div className="App">
      {peopleArr.map(person => {
        return <PersonComponent firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>
      })}
    </div>
  );
}

export default App;
