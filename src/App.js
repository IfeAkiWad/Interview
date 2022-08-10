import React, {useState} from 'react'
import './App.css';
import Dish from './components/Dish';
import DishForm from './components/DishForm';

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
    const currentState = [...dish]
    /*stored in the variable newDish is the established state ([...dish]) */
    const newDish = [currentState, { name, ingredients: ingredients.split(',') }]
    /*add newDish as an argument for setDish to set the state */
    setDish(newDish)
  }

  const removeDish = (index) => {
    const newDish = [...dish] //storing current state in newDish variable
    newDish.splice(index, 1) //at position "index", remove 1 item
    setDish(newDish)
  }

  return (
    <div className="App">
      {console.log(dish)}
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
