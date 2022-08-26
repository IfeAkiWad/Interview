import React, {useState} from 'react'
import './App.css';
import Dish from './components/Dish';
import DishForm from './components/DishForm';
import IngrFilter from "./components/IngrFilter";

const App = () => {
  const [dish, setDish] = useState([
    {name: 'Injera',
    ingredients: [
      'flour', ' sugar', ' milk'
    ]
    },
    {name: 'Akara',
    ingredients: [
      'flour', ' sugar', ' milk'
    ]
    },
    {name: 'Bandeja Paisa',
    ingredients: [
      'flour', ' sugar', ' milk'
    ]
    },
    {name: 'Tandoori Chicken',
    ingredients: [
      'flour', ' sugar', ' milk'
    ]
    }
  ])
 

  /*The purpose of newDish() is to be able to add to the state of listed dishes with a created a dish */
  const newDish = (name, ingredients) => {
    /*stored in the variable newDish is the established state ([...dish]) and adding what will be "concatenated" (name and ingredients) the new dish into the current state */
    const newDish = [...dish, { name, ingredients: ingredients.split(',') }] //.split(',') on ingredients allows for the ingredients to be iterable, instead of it being a whole string.
    /*add newDish as an argument for setDish to set the state */
    setDish(newDish)
    console.log(newDish, "Here I am")
  }

  const removeDish = (index) => {
    const newDish = [...dish] //storing current state in newDish variable
    newDish.splice(index, 1) //at position "index", remove 1 item
    setDish(newDish)
  }

  return (
    <div className="App">
      {/* {console.log(dish)} */}
      < IngrFilter dish={dish} />
      <div>
        <h2>List of Dishes</h2>
        {/*eslint-disable-next-line array-callback-return*/}
        {dish.map((dish, index) => <Dish key={index} 
          index={index} // <--- used later to delete dish
          dish={dish} 
          removeDish={removeDish}
        />
        )}<br />
         <h2>Add New Dish</h2>
        <DishForm addNewDish={newDish} />
      </div>
    </div>
  );
}

export default App;
