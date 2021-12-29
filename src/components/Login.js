import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className={styles.container}>
            <body>
                LOGIN
            </body>
            <div className={styles.inputfield}>
                <body>Email</body>
                <input type='text' />
            </div>
            
            <div className={styles.inputfield}>
                <body>Password</body>
                <input type='text' />
            </div>

            <Link to="/register">
                <button> Create Account </button>
            </Link>
        </div>
    )
}
