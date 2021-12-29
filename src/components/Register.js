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
        event.preventDefault();
        console.log(inputs);
    }


    return (
        <div className= {styles.container}>
            <h2>
                Create Account
            </h2>

            <form onSubmit={handleSubmit} className= {styles.inputfield}>
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
