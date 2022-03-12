import React from 'react'

const Dish = ({ dish, index, removeDish }) => {

    return (
      <div>
        <ul className={'dish-list'}>
          <li>
            {dish.name}&nbsp;
            {/*eslint-disable-next-line array-callback-return*/}
            <ul>
            {dish.ingredients.map((ingr, index) => {
              return <li key={index}>
                    {ingr}
              </li>
          })}
            </ul>  
          <button className='delete' onClick={() => removeDish(index)}>x</button>
          </li>
        </ul>
      </div>
    );
}

export default Dish

