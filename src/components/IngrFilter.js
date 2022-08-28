import React, { useState } from 'react'

const IngrFilter = ({ dish, index }) => {
    console.log(dish, "dish")
    const [filter, setFilter] = useState('')

    const handleOnChangeFilter = (event) => {
        setFilter(event.target.value)
    }

    // let mapFilter = dish.map((dish, i) => {
    //     return dish.filter(d => d[i].ingredient)
    // })

    // // let mapDishIngr = dish.[index]
    // // console.log(mapDishIngr, "mapped")
    // // eslint-disable-next-line array-callback-return
    // let handleFilter = !filter ? dish : mapFilter.includes(filter)
    //    console.log(handleFilter) 

    // let handleFilter = !filter ? dish : dish.filter((dish, i) => dish[i].includes(filter))
    // console.log(handleFilter) 


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