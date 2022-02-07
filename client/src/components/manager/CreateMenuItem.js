import axios from 'axios';
import React, {useState} from 'react';
import Constants from '../../Constants.json';
import {useParams, useNavigate} from 'react-router-dom'

export default function CreateMenuItem() {

    const navigate = useNavigate();
    const params = useParams();

    const [inputs, setInputs] = useState({})

    const handleInputs = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}))
    }

    async function submitForm(event){
        event.preventDefault();

        try {
            await axios.put(
                Constants.API_ADDRESS + '/restaurant/menus/' + params._id,
                inputs
            )
            navigate('/manager', {replace: true})
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={submitForm}>
            <h4> ItemName:
                <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleInputs}
                />
            </h4>

            <h4> Category:
                <input
                type="text"
                name="category"
                value={inputs.category}
                onChange={handleInputs}
                />
            </h4>

            <h4> Description:
                <input
                type="text"
                name="description"
                value={inputs.description}
                onChange={handleInputs}
                />
            </h4>

            <h4> Price:
                <input
                type="text"
                name="price"
                value={inputs.price}
                onChange={handleInputs}
                />
            </h4>

            <button type='submit'> Submit </button>

        </form>
    );
}
