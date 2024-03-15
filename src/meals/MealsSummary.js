import React from 'react'
import mealsImage from "../assets/meals.jpeg"
import "../meals/MealsSummary.css"

const MealsSummary = () => {
    return (
        <div className='mealsSummaryWrapper'>
            <img className="mealsImage" src={mealsImage} alt="" />
            <div className='mealsSummaryDiv'>
                <h3 className='mealsSummaryTitle'>Delicious Food, Delivered To You</h3>
                <p className='mealsSummaryP1'>Choose your favorite meal from our broad selection
                 of available meals and enjoy a delicious bunch of dinner at home.</p>
                <p className='mealsSummaryP2'>All our meals are cooked with 
                high-quality ingredients, just-in-time and of course by experienced chefs!</p>

            </div>
            
        </div>
    )
}

export default MealsSummary