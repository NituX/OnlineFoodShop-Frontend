import React, {useState} from 'react';
import styles from './Login.module.css';
import axios from 'axios'
import Constants from '../../Constants.json'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [regState, setRegState] = useState("idle");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }


    async function registerUser(event) {
        event.preventDefault();
        setRegState("waiting")

        try {
            const response = await axios.post(Constants.API_ADDRESS + '/register',
            {
                name: inputs.cname,
                email: inputs.email,
                phone: inputs.phone,
                password: inputs.password
            });

            console.log(response);
            setRegState("successful")
            setTimeout(() => {
                navigate('/login', {replace: true})
            }, 1000);
        } catch (error) {
            setRegState("error")
            console.log(error)
            setTimeout(() => {
                setRegState("idle")
            }, 2000);
        }
        
        /*
        //without axios
        const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
    })

    const data = await response.json()
    */

    console.log()
    }


    let registerUICtrl = null;

    switch (regState) {
        case "idle":
            registerUICtrl = <button type="submit"> Create </button>
            break;
    
        case "waiting":
            registerUICtrl = <span> ... </span>
            break;

        case "error":
            registerUICtrl = <span> Account creation failed </span>
            break;

        case "successful":
            registerUICtrl = <span> Account creation Successful </span>
            
            break;
    }


    return (
        <div className= {styles.container}>
            <h2>
                Create Account
            </h2>

            <form onSubmit={registerUser} className= {styles.inputfield}>
                <label>Name:
                <input
                 type="text"
                 name="cname"
                 value={inputs.cname || ""}
                 onChange={handleChange}                 
                 />
                </label>

                <label>Email:
                <input
                type="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}   
                />
                </label>
           
                <label>Phone:
                <input
                type="number"
                name="phone"
                value={inputs.phone || ""}
                onChange={handleChange}   
                />
                </label>

                <label>Password:
                <input
                type="password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}   
                />
                </label>

                <div className={styles.buttoncontainer}>
                    {registerUICtrl}
                </div>
                
            </form>

            
            

        </div>
    )
}
