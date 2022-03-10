import React, { useState } from "react";

const DishForm = ({ addNewDish }) => {
    const [newDish, setNewDish] = useState('')
  
    const handleOnChange = (event) => {
      setNewDish(event.target.value)
    }
  
    const handleOnSubmit = (event) => {
      event.preventDefault()
      if(!newDish) return
        addNewDish(newDish)
        setNewDish('')
      
    }
  
    return (
      <div>
        <form onSubmit={handleOnSubmit}>
          <input type='text' onChange={handleOnChange} value={newDish} />&nbsp;
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
}

export default DishForm