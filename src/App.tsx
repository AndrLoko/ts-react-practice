import React, { FC, useState } from 'react';
import AddPizzaForm from './components/AddPizzaForm';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
     <div className="wrap">
        <span className='heading'>Our Pizzeria</span>
        <AddPizzaForm />
     </div>
    </div>
  );
}

export default App;
