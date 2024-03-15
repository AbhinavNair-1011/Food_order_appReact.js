
import { useReducer, useState } from 'react';
import { cartToggle } from './CartToggle'


const CartContext = ({ children }) => {


  const [isCartOpen, setIsCartOpen] = useState(false);


  const initialState = {
    items: [],
    totalAmount: 0,
    totalItem: 0
  }
  const reducer = (state, action) => {



    if (action.type == "removeFromInsideCart") {
      console.log(action.type)
      if (action.payload == "Sushi") {
        const updatedItems = [...state.items];
        const updatedAmount = state.totalAmount - 22.99;
        const index = updatedItems.findIndex((updatedItems => updatedItems.name == "Sushi"));
        updatedItems.splice(index, 1);

        return { items: updatedItems, totalAmount: updatedAmount }


      } else if (action.payload == "Schnitzel") {
        const updatedItems = [...state.items];
        const updatedAmount = state.totalAmount - 16.5;
        const index = updatedItems.findIndex((updatedItems => updatedItems.name == "Schnitzel"));
        updatedItems.splice(index, 1);

        return { items: updatedItems, totalAmount: updatedAmount }


      } else if (action.payload == "Green Bowl") {
        const updatedItems = [...state.items];
        const updatedAmount = state.totalAmount - 18.99;
        const index = updatedItems.findIndex((updatedItems => updatedItems.name == "Green Bowl"));
        updatedItems.splice(index, 1);
        return { items: updatedItems, totalAmount: updatedAmount }


      } else if (action.payload == "Barbecue Burger") {
        const updatedItems = [...state.items];
        const updatedAmount = state.totalAmount - 12.99;
        const index = updatedItems.findIndex((updatedItems => updatedItems.name == "Barbecue Burger"));
        updatedItems.splice(index, 1);

        return { items: updatedItems, totalAmount: updatedAmount }


      }

    }

    if (action.type == "add") {


      const convert = +action.payload.amount;
      const updatedItems = [...state.items]

      for (let i = 1; i <= convert; i++) {
        updatedItems.push(action.payload)
      }


      const updatedAmount = state.totalAmount + action.payload.price * convert

      return { ...state, items: updatedItems, totalAmount: updatedAmount }

    }



    if (action.type = "addFromInsideCart") {
      if (action.payload == "Sushi") {
        const updatedItems = [...state.items];
        const updatedAmount = state.totalAmount + 22.99;
        updatedItems.push({ name: "Sushi", id: "m1" })

        return { ...state, items: updatedItems, totalAmount: updatedAmount, ...state.totalItem }


      } else if (action.payload == "Schnitzel") {
        const updatedItems = [...state.items];
        const updatedAmount = state.totalAmount + 16.5;
        updatedItems.push({ name: "Schnitzel", id: "m2" })

        return { ...state, items: updatedItems, totalAmount: updatedAmount, ...state.totalItem }


      } else if (action.payload == "Green Bowl") {
        const updatedItems = [...state.items];
        const updatedAmount = state.totalAmount + 18.99;
        updatedItems.push({ name: "Green Bowl", id: "m4" })

        return { ...state, items: updatedItems, totalAmount: updatedAmount, ...state.totalItem }


      } else if (action.payload == "Barbecue Burger") {
        const updatedItems = [...state.items];
        const updatedAmount = state.totalAmount + 12.99;
        updatedItems.push({ name: "Barbecue Burger", id: "m3" })

        return { ...state, items: updatedItems, totalAmount: updatedAmount, ...state.totalItem }


      }

    }





  }

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <cartToggle.Provider value={{ isCartOpen, setIsCartOpen, state, dispatch }}>
      {children}
    </cartToggle.Provider>
  )
}

export default CartContext