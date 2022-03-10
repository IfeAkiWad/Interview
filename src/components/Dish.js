import React from 'react'

const Dish = ({ dish, index, removeDish }) => {

    return (
      <div>
        <ul className={'dish-list'}>
          <li>
            {dish.name}&nbsp;
          <button className='delete' onClick={() => removeDish(index)}>x</button>
          </li>
        </ul>
      </div>
    );
}

export default Dish

