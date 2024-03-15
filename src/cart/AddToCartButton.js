import React, { useContext, useRef } from 'react'
import "../cart/AddToCartButton.css"
import { cartToggle } from '../store/CartToggle'

const AddToCartButton = (props) => {
  const inputRef=useRef()
  
const cartCtx= useContext(cartToggle)


  const addToCartHandler= (e)=>{
    e.preventDefault()
    const update={...props.item,amount:inputRef.current.value}
    cartCtx.dispatch({type:"add", payload:update})
    inputRef.current.value=1
const a=document.querySelector(".cartButton");
a.classList.add("cartAdded")

  }

  return (
   <form className='mealAmountForm'>
    <div className='mealAmountFormDiv'>
    <label className='mealAmountLabel'>Amount</label>
    <input  className="mealAmount" type="number" defaultValue="1" ref={inputRef}/>
    </div>
    <button className='addButton' onClick={addToCartHandler}>+ Add</button>
   </form>
  )
} 

export default AddToCartButton