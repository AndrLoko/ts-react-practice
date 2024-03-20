import React from 'react';
import './App.css';

type Order = {
  title: string,
  quantity?: number
}

const order: Order = {title: 'margarita', quantity: 10}

const orders: Order[] = [
  {title: 'margarita'},
  {title: 'salami', quantity: 10}
];

let number: null | number = null

number = 10

function App() {
  return (
    <div className="App">
      New App!
    </div>
  );
}

export default App;
