import React from 'react';
import styles from './Login.module.css';

export default function Login() {
    return (
        <div className= {styles.container}>
            <body>
                LOGIN
            </body>
            <div className= {styles.inputfield}>
                <body>Email</body>
                <input type='text'/>
            </div>
            <div className= {styles.inputfield}>
                <body>Password</body>
                <input type='text'/>
            </div>

            <button> Create Account </button>

        </div>
    )
}
