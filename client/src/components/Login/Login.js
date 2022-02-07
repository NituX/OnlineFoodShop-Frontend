import React, { useState, useContext } from 'react';
import styles from './Login.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Constants from '../../Constants.json'
import { UserAuthContext } from '../../Contexts';

export default function Login() {

    const UsrAuthCntxtValue = useContext(UserAuthContext)
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

        try {
            const response = await axios.post(
                Constants.API_ADDRESS + '/users/login',
                null, {
                    auth: {
                        username: inputs.email,
                        password: inputs.password
                    }
                }
            );
            console.log(response);

            const recJWT = response.data.token;
            console.log(recJWT)
            
            setTimeout(() => {
                setLoginState("idle")
                navigate('/', {replace: true});
                UsrAuthCntxtValue.login(recJWT);
            }, 1000);
            
        } catch (error) {
            setLoginState("error")
            console.log(error);
            setTimeout(() => {
                setLoginState("idle")
            }, 2000);
        }
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

        default:
            
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
