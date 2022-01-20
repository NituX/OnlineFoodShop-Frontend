import React, { useState } from 'react';
import styles from './Login.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Constants from '../../Constants.json'

export default function Login(props) {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [loginState, setLoginState] = useState("idle");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    async function login(event) {
        event.preventDefault();
        setLoginState("waiting")

        //with axios
        try {
            const response = await axios.post(
                Constants.API_ADDRESS + '/login',
                /*
                null,
                auth: {
                    email: inputs.email,
                    password: inputs.password
                }*/
            {
                email: inputs.email,
                password: inputs.password
            });

            const recJWT = response.data.token;
            props.login(recJWT)

            console.log(response);


            setLoginState("successful")
            setTimeout(() => {
                navigate('/', {replace: true});
            }, 1000);
            
        } catch (error) {
            setLoginState("error")
            console.log(error);
            setTimeout(() => {
                setLoginState("idle")
            }, 2000);
        }

        /*
        //without axios
        const response = await fetch('/login', { //url to somewhere else
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        })

        const data = await response.json()

        if(data.user) {
            alert('login successful')
        } else {
            alert('please check your username and password')
        }*/
    }

    let loginUICtrl = null;

    switch (loginState) {
        case "idle":
            loginUICtrl = <button type="submit"> Login </button>
            break;
    
        case "waiting":
            loginUICtrl = <span> ... </span>
            break;

        case "error":
            loginUICtrl = <span> Login failed </span>
            break;

        case "successful":
            loginUICtrl = <span> Login Successful </span>
            
            break;
    }

    return (
        <div className={styles.container}>
            <h2>
                LOGIN
            </h2>

            <form onSubmit={login} className={styles.inputfield}>
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
                        type="password"
                        name="password"
                        value={inputs.password || ""}
                        onChange={handleChange}
                    />
                </label>

                <div className={styles.buttoncontainer}>

                    {loginUICtrl}

                    <Link to="/register">
                        <button> Create Account </button>
                    </Link>

                </div>




            </form>




        </div>
    )
}
