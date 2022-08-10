import React from 'react'

const Dish = ({ dish, index, removeDish }) => {

    return (
      <div>
        <ul className={'dish-list'}>
          <li>
            <button className='delete' onClick={() => removeDish(index)}>x</button>&nbsp;
            <b>Name: </b>{dish.name}
            {/*eslint-disable-next-line array-callback-return*/}
            <ul>
            {dish.ingredients.map((ingr, index) => {
              return <li key={index}>
                    {ingr}
              </li>
          })}
            </ul>  
          </li>
        </ul>
      </div>
    );
}

export default Dish

