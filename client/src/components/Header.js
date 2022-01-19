import React from 'react'
import styles from './Header.module.css';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        
        <nav className = {styles.container}>
            <Link to="">
                <h1 className = {styles.logo}> AWAFOOD </h1>
            </Link>
            
            <div className = {styles.navmenu}>
                <Link to = "login">
                    <h3> Login </h3>
                </Link>
                <Link to = "cart">
                Cart

                </Link>
            </div>
        </nav>
    )
}
