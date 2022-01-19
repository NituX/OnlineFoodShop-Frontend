import React, {useState} from 'react';
import styles from './Login.module.css';

export default function Login() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        //event.preventDefault();
        //console.log(inputs);
    }

    async function registerUser(event) {
        event.preventDefault();
        const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
    })

    const data = await response.json()

    console.log(data)
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
                    <button type="submit"> Create </button>
                </div>
                
            </form>

            
            

        </div>
    )
}
