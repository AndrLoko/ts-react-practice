import React, { FC, useState } from 'react';
import AddPizzaForm from './components/AddPizzaForm';
import Pizza from './models/Pizza';
import './App.css';

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([])

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  } 

  console.log('pizzasList >>>', pizzasList)

  return (
    <div className="App">
     <div className="wrap">
        <span className='heading'>Our Pizzeria</span>
        <AddPizzaForm 
          addPizza={addPizza}
        />
     </div>
    </div>
  );
}

export default App;
