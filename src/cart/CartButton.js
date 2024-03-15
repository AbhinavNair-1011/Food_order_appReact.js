import React, { useContext } from 'react'
import "../cart/CartButton.css"
import { cartToggle } from '../store/CartToggle'

const CartButton = () => {

 const cartCtx =useContext(cartToggle);

 const cartToggleHandler =()=>{
  cartCtx.setIsCartOpen(!cartCtx.isCartOpen)
  console.log(cartCtx.state)

 }
  return (

    <button className='cartButton'onClick={cartToggleHandler}>
      
        <h3 className='cart-heading'>Your Cart</h3>
      
      
      
    </button>
  )
}

export default CartButton