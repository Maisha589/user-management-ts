import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Users from './Components/Users';

let student: string = "Jeff";
let age: number = 89;
let isSmart: boolean = true;

let students: string[] = ["jow", "Biden", "Harris"];
let fees: number[] = [12, 43, 3, 53, 23];

interface Person {
  name: string,
  job?: string,
  employed: string | boolean,
  age: number,
  location?: string | number
}

const person: Person = {
  name: "Bill clington",
  age: 45,
  employed: true,
  location: 99
}

const handleDDuSER = (firstName: string, age: number, address: string): number => {
  const total: number = 50;
  console.log(firstName, age, address)
  return age;
}

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
