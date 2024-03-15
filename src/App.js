
import './App.css';

import Header from "./header/Header"
import Meals from './meals/Meals';
import MealsSummary from './meals/MealsSummary';
import CartContext from './store/CartContext';


function App() {

  
  return (
  <CartContext >

  < Header/>
  <MealsSummary/>
  < Meals/>


  </CartContext>
  );
}

export default App;
