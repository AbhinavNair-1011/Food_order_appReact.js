import React from 'react'
import AddToCartButton from '../cart/AddToCartButton'
import "../meals/mealItem.css"
const MealItem = (props) => {
    
  return (
    <>
   
    <li className="mealItem">
        <div className='mealItemLeft'>
        <div className='mealName'>
            {props.item.name}
        </div>
        <div className="mealDescription">
            {props.item.description}
        </div>
        <div className='mealAmount'>
            ${props.item.price}
        </div>
        </div>
        <div className='mealItemRight'>
            <AddToCartButton item={props.item}/>
        </div>
       
    </li>
    <hr/>
    </>
  )
}

export default MealItem