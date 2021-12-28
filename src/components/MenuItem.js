import React from 'react'
import styles from './MenuItem.module.css'

export default function Menu(props) {
    return (
        <dl className={styles.container}>
            
                <button>
                    Add to Cart
                </button>
        
            <div className={styles.itemPrice}>
                    {
                        props.price
                    }
                    €
                </div>

                <div className = {styles.image}>
asd
                </div>
                
            <dt>
                {
                    props.itemName
                }
                <dd>
                    '{
                        props.description
                    }'
                </dd>
            </dt>

        </dl>
    )
}
