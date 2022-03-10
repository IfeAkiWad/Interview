import React, {useState} from 'react'
import './App.css';
import Dish from './components/Dish';
import DishForm from './components/DishForm';

const App = () => {
  const [dish, setDish] = useState([
    {name: 'Injera'},
    {name: 'Akara'},
    {name: 'Bandeja Paisa'},
    {name: 'Tandoori Chicken'}
  ])

  const newDish = (name) => {
    const newDish = [...dish, { name }]
    setDish(newDish)
  }

  const removeDish = (index) => {
    const newDish = [...dish]
    newDish.splice(index, 1)
    setDish(newDish)
  }

  return (
    <div className="App">
      {console.log(dish)}
      <div>
        <h2>List of Dishes</h2>
        {/*eslint-disable-next-line array-callback-return*/}
        {dish.map((dish, index) => <Dish key={index} 
          index={index} 
          dish={dish} 
          removeDish={removeDish} 
        />
        )}<br />
         <h2>Add New Dish</h2>
        <DishForm addNewDish={newDish}/>
      </div>
    </div>
  );
}

export default App;
