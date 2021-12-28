import React from 'react'
import styles from './Header.module.css';

export default function Header() {
    return (
        
        <nav className = {styles.container}>
            <h1 className = {styles.logo}> AWAFOOD </h1>
            <div className = {styles.navmenu}>
                <body> Login </body>
                <body> Cart </body>
            </div>
        </nav>
    )
}
