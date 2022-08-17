import React, { useState } from 'react'

const IngrFilter = ({ dish }) => {
    console.log(dish, "dish")
    const [filter, setFilter] = useState('')

    const handleOnChangeFilter = (event) => {
        setFilter(event.target.value)
    }

    // eslint-disable-next-line array-callback-return
    let handleFilter = dish.ingredient.filter(dish => {
        if(filter !== '') {
            return dish.toLowerCase().includes(filter)
        }
    })
       console.log(handleFilter) 
    


    return (
        <div>
            <b>search ingredients: </b><input type="text" onChange={handleOnChangeFilter} value={filter}/> 
            {/* <ul> {handleFilter.map( name => {
                return <li>{name}</li>
            })}
            </ul> */}
           
            
        </div>
    )
}

export default IngrFilter