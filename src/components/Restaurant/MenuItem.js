import React, { useState } from 'react'
import styles from './MenuItem.module.css'

export default function Menu(props) {

    const [itemCount, setItemCount] = useState("1");

    const handleChange = (event) => {
        setItemCount(event.target.value)
    }

    return (
        <dl className={styles.container}>





            <div className={styles.image}>
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


            <div className={styles.itemPrice}>
                {
                    props.price
                }
                €
            </div>

            <div className={styles.addToCart}>

                <form className={styles.quantity}>
                    <select value={itemCount} onChange={handleChange}>
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                    </select>
                </form>

                <button>
                    Add to Cart
                </button>




            </div>

        </dl>


    )
}
