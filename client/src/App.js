import './App.css';
import axios from 'axios';
import Constants from './Constants.json';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManageMenu from './components/manager/ManageMenu.js';
//import Restaurants from './restaurants.json';
import Header from './components/Header.js';
import Login from './components/Login/Login.js';
import Register from './components/Login/Register.js';
import Restaurant from './components/Restaurant/Restaurant.js';
import Home from './components/Home';
import CartView from './components/Cart/CartView';
import { UserAuthContext } from './Contexts';
import ManagerDB from './components/manager/managerDB';
import InfoForm from './components/manager/infoForm';

const storedJWT = window.localStorage.getItem('userAuthData');

function App() {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants()
  }, []);

  const getRestaurants = () => {
    axios.get(Constants.API_ADDRESS + '/restaurant')
    .then(response => {
      console.log("Terrve")
      setRestaurants(response.data.restaurants)
    })
    .catch(error => {
      console.log(error)
    })
  }


  const initialAuthData = {
    jwt: storedJWT,
    login: (newValueForJwt) => {
      const newAuthData = {
        ...userJWT,
        jwt: newValueForJwt
      }
      window.localStorage.setItem('userAuthData', newValueForJwt)
      setUserJWT(newAuthData)
    },
    logout: () => {
      window.localStorage.removeItem('userAuthData')
      setUserJWT({ ...initialAuthData })
    }
  }

  const [userJWT, setUserJWT] = useState({...initialAuthData});

  let authRoutes =
    <>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
    </>

  if (userJWT.jwt) {

    authRoutes =
      <>
        <Route path="/cart" element={<CartView />} />
        <Route path="/manager" element={<ManagerDB restaurants={restaurants}/>} >
          <Route path=":_id" element={<InfoForm restaurants={restaurants}/>} />
          <Route path=":_id/menu" element={<ManageMenu restaurants={restaurants}/>}/>
        </Route>
      </>
  }

  

  return (
    <UserAuthContext.Provider value={userJWT}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home restaurants={restaurants} setRestaurants={setRestaurants}/>}/>
            <Route path='*' element={<Home/>} />
            <Route path="/restaurant/:_id" element={<Restaurant restaurants={restaurants}/>} />
            {authRoutes}

          </Routes>
        </div>
      </BrowserRouter>
    </UserAuthContext.Provider>
  );
}

//loginStatus = {userJWT}

export default App;
