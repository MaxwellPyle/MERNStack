import React from 'react';
import './App.css';
import PersonComponent from './components/PersonComponent.js';

var peopleArr =[
  {"firstName":"Leonard", "lastName":"Smith", "age":22, "hairColor":"Green", "likes":0},
  {"firstName":"Alfred", "lastName":"Romeo","age":16,"hairColor":"N/A", "likes":0},
  {"firstName":"Tabitha", "lastName":"Johnson","age":26,"hairColor":"Blonde", "likes":0},
  {"firstName":"DaQuan", "lastName":"Jefferson","age":21,"hairColor":"Black", "likes":0}
]

function App() {
  return (
    <div className="App">
      {peopleArr.map(person => {
        return <PersonComponent firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} likes={person.likes}/>
      })}
    </div>
  );
}

export default App;
