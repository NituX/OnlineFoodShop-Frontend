import React from 'react'
import MenuItem from './MenuItem.js'
import styles from './Restaurant.module.css'

export default function MenuList(props) {
    return (
        <div>
            {
                    props.items.map(item => <MenuItem className={styles.listItem} key={item.itemId} {...item} />)
                }
        </div>
    )
}
