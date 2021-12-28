import React, {useState} from 'react';
import MenuItem from './MenuItem';
import styles from './Restaurant.module.css';

export default function Restaurant(props) {

    const [searchString, setSearhcString] = useState("");

    return (
        <div className = {styles.container}>
            <div>
            <h2> KALLEN KEBAB </h2>
            </div>
            
            <div className = {styles.filter}>
            Filter <input type = "text" onChange={ (event) => setSearhcString(event.target.value)}/>
            </div>
            

            <div className={styles.menulist}>
                {
                props.items.map(item => <MenuItem className = {styles.listItem} key={item.itemId} {...item}/>)
                }
            </div>
        </div>
    )
}
