import React, { useContext, useEffect } from 'react'
import "../cart/cart.css"
import { cartToggle } from '../store/CartToggle';
import CartItem from './CartItem';

const Cart = () => {
  

  const cartCtx = useContext(cartToggle);

 
  const cartToggleHandler = (e) => {
    cartCtx.setIsCartOpen(!cartCtx.isCartOpen)

  }
  const stopPropagationHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='cartModal' onClick={cartToggleHandler}>



      <div className='cart' onClick={stopPropagationHandler}>

        <button className='cartCloseButton' onClick={cartToggleHandler}>X</button>

        <ul className='cartList'>

        <CartItem></CartItem>
        </ul>


        <div className='cartAmountDiv'>
        
          <h2 className='totalAmountH'>Total Amount</h2>
          <h3 className='totalAmountP'>{cartCtx.state.totalAmount.toFixed(2)}</h3>

        </div>

      </div>

    </div>

  )
}

export default Cart