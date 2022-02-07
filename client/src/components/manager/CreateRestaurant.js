import React, {useState, useEffect} from 'react';
import Constants from '../../Constants.json';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';

export default function CreateRestaurant() {

    const navigate = useNavigate();
  const [restaurantInfo, setRestaurantInfo] = useState({});

  const handleReset = () => {
    document.querySelectorAll("input").forEach(
      input => (input.value = null)
    )
    setRestaurantInfo({})
  }

  useEffect(() => {
    handleReset();
    console.log("useEffect")
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setRestaurantInfo(values => ({ ...values, [name]: value}))
  }

  async function submitForm(event){
    event.preventDefault();

    try {
      await axios.post(
        Constants.API_ADDRESS + '/restaurant/',
        restaurantInfo
        )
        console.log(restaurantInfo)
        handleReset()
        navigate('/manager', {replace: true})
        window.location.reload();
      
    } catch (error) {
      console.log(error)
    }
  }

  return( 
  
<form onSubmit={submitForm}>
      <h4> Name:
        <input
          type="text"
          name="name"
          value={restaurantInfo.name}
          onChange={handleChange}
        />
      </h4>

      <h4> Description:
        <input
          type="text"
          name="description"
          value={restaurantInfo.description}
          onChange={handleChange}
        />
      </h4>

      <h4> PriceLevel (€):
        <input
          type="text"
          name="pricelevel"
          value={restaurantInfo.pricelevel}
          onChange={handleChange}
        />
      </h4>

      <h4> Operating Hours:
        <input
          type="text"
          name="openingHours"
          value={restaurantInfo.openingHours}
          onChange={handleChange}
        />
      </h4>

      <h4> Phone:
        <input
          type="number"
          name="phone"
          value={restaurantInfo.phone}
          onChange={handleChange}
        />
      </h4>

      <h4> Address:
        <input
          type="text"
          name="address"
          value={restaurantInfo.address}
          onChange={handleChange}
        />
      </h4>

      <h4> City:
        <input
          type="text"
          name="city"
          value={restaurantInfo.city}
          onChange={handleChange}
        />
      </h4>

      <h4> ZipCode:
        <input
          type="number"
          name="zipcode"
          value={restaurantInfo.zipcode}
          onChange={handleChange}
        />
      </h4>

      <button type='submit'> Submit </button>

      <Link to={'menu'}> <button> Menu </button> </Link>

    </form>


  );
}
