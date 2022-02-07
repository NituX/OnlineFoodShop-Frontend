import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useParams, useNavigate, Link, Outlet} from 'react-router-dom'
import Constants from '../../Constants.json'

export default function InfoForm({restaurants}) {

  

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
  }, []);
  
  const params = useParams();
  const currentRestaurant = restaurants.find(i => i._id.includes(params._id))

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setRestaurantInfo(values => ({ ...values, [name]: value}))
  }

  async function submitForm(event){
    event.preventDefault();

    try {
      await axios.put(
        Constants.API_ADDRESS + '/restaurant/' + currentRestaurant._id,
        restaurantInfo
        )
        console.log(restaurantInfo)
        handleReset()
        navigate('/manager/', {replace: true})
        window.location.reload();
      
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteRestaurant(event) {
    event.preventDefault();

    try {
        await axios.delete(
            Constants.API_ADDRESS + '/restaurant/' + params._id
        )
        navigate('/manager', {replace: true})
        window.location.reload();
    } catch (error) {
        console.log(error)
    }

}

  return (
    <form onSubmit={submitForm}>
      <h4> Name:
        <input
          type="text"
          name="name"
          placeholder={currentRestaurant.name}
          value={restaurantInfo.name}
          onChange={handleChange}
        />
      </h4>

      <h4> Description:
        <input
          type="text"
          name="description"
          placeholder={currentRestaurant.description}
          value={restaurantInfo.description}
          onChange={handleChange}
        />
      </h4>

      <h4> PriceLevel (€):
        <input
          type="text"
          name="pricelevel"
          placeholder={currentRestaurant.pricelevel}
          value={restaurantInfo.pricelevel}
          onChange={handleChange}
        />
      </h4>

      <h4> Operating Hours:
        <input
          type="text"
          name="openingHours"
          placeholder={currentRestaurant.openingHours}
          value={restaurantInfo.openingHours}
          onChange={handleChange}
        />
      </h4>

      <h4> Phone:
        <input
          type="number"
          name="phone"
          placeholder={currentRestaurant.phone}
          value={restaurantInfo.phone}
          onChange={handleChange}
        />
      </h4>

      <h4> Address:
        <input
          type="text"
          name="address"
          placeholder={currentRestaurant.address}
          value={restaurantInfo.address}
          onChange={handleChange}
        />
      </h4>

      <h4> City:
        <input
          type="text"
          name="city"
          placeholder={currentRestaurant.city}
          value={restaurantInfo.city}
          onChange={handleChange}
        />
      </h4>

      <h4> ZipCode:
        <input
          type="number"
          name="zipcode"
          placeholder={currentRestaurant.zipcode}
          value={restaurantInfo.zipcode}
          onChange={handleChange}
        />
      </h4>

      <button type='submit'> Submit </button>
      <button onClick={deleteRestaurant}> Delete </button>
      <Link to={'menu'}> <button> Menu </button> </Link>

    </form>
  )

}
