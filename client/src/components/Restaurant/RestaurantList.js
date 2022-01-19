import React from 'react'
import RestaurantButton from './RestaurantButton'

export default function RestaurantList(props) {
    return (
        <div>
            {
                props.items.map(item => <RestaurantButton key={item.id} {...item} />)
            }
        </div>
    )
}
