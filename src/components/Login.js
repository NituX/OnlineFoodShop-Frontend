import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

export default function Login() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <div className={styles.container}>
            <h2>
                LOGIN
            </h2>

            <form onSubmit={handleSubmit} className={styles.inputfield}>
                <label> Email:
                    <input
                        type="text"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange}
                    />
                </label>

                <label> Password:
                    <input
                        type="text"
                        name="password"
                        value={inputs.password || ""}
                        onChange={handleChange}
                    />
                </label>

                <div className={styles.buttoncontainer}>

                    <button type="submit"> Login </button>

                    <Link to="/register">
                        <button> Create Account </button>
                    </Link>

                </div>




            </form>




        </div>
    )
}
