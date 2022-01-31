import React from 'react'
import RestaurantButton from './RestaurantButton'

export default function RestaurantList(props) {
    console.log("RList")
    console.log(props)

    return (
        <div>
            {
                props.restaurants.map(item => <RestaurantButton key={item._id} {...item} />)
            }
        </div>
    )
}
