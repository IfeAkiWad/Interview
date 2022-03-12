import React, { useState } from "react";

const DishForm = ({ addNewDish }) => {
    const [newDish, setNewDish] = useState('')
    const [ingredients, setIngredients] = useState('')
  
    const handleOnChangeName = (event) => {
      setNewDish(event.target.value)
    }
  
    const handleOnChangeIngr = (event) => {
      setIngredients(event.target.value)
    }

    const handleOnSubmit = (event) => {
      event.preventDefault()
      if(!newDish) return
        addNewDish(newDish, ingredients)
        setNewDish('')
        setIngredients('')
      
    }
  
    return (
      <div>
        <form onSubmit={handleOnSubmit}>
          <label>Dish Name</label>
          <input type='text'name='name' onChange={handleOnChangeName} value={newDish} />&nbsp;
          <label>Ingredients</label>
          <input type='text'name='ingredients' onChange={handleOnChangeIngr} value={ingredients} />&nbsp;
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
}

export default DishForm