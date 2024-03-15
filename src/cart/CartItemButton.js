import React, { useContext } from 'react'
import "../cart/cartItemButton.css"
import { cartToggle } from '../store/CartToggle'

const CartItemButton = () => {

  const cartCtx= useContext(cartToggle)

  const addToCartHandler= (e)=>{
  const itemName= e.target.parentElement.parentElement.firstElementChild.firstChild.data
    cartCtx.dispatch({type:"addFromInsideCart", payload:itemName})
  }
  const removeFromCartHandler=(e)=>{

    const itemName= e.target.parentElement.parentElement.firstElementChild.firstChild.data
    cartCtx.dispatch({type:"removeFromInsideCart", payload:itemName})
  }
  return (
    <div className='addRemove'>
        <button className='remove' onClick={removeFromCartHandler}> -</button>
        <button className='add' onClick={addToCartHandler}> + </button>
    </div>
  )
}

export default CartItemButton