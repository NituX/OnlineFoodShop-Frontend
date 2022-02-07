import './App.css';
import axios from 'axios';
import Constants from './Constants.json';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManageMenu from './components/manager/ManageMenu.js';
import Header from './components/Header.js';
import Login from './components/Login/Login.js';
import Register from './components/Login/Register.js';
import Restaurant from './components/Restaurant/Restaurant.js';
import Home from './components/Home';
import CartView from './components/Cart/CartView';
import { UserAuthContext } from './Contexts/Contexts';
import {CartContextProvider} from './Contexts/CartContexts'
import ManagerDB from './components/manager/managerDB';
import InfoForm from './components/manager/infoForm';
import CreateMenuItem from './components/manager/CreateMenuItem';
import CreateRestaurant from './components/manager/CreateRestaurant';

const storedJWT = window.localStorage.getItem('userAuthData');

function App() {

  useEffect(() => {
    getRestaurants()
  }, []);

  const [restaurants, setRestaurants] = useState([]);

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
      console.log("login")
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
      <Route path='*' element={<Home/>} />
    </>

  if (userJWT.jwt) {

    authRoutes =
      <>
        <Route path='*' element={<Home/>} />
        <Route path="/cart" element={<CartView/>} />
        <Route path="/manager" element={<ManagerDB restaurants={restaurants}/>} >
          <Route path=":_id" element={<InfoForm restaurants={restaurants}/>} />
          <Route path="new" element={<CreateRestaurant/>}/>
          <Route path=":_id/menu" element={<ManageMenu restaurants={restaurants}/>}/>
          <Route path=":_id/menu/add" element={<CreateMenuItem/>}/>
        </Route>
      </>
  }

  

  return (
    <UserAuthContext.Provider value={userJWT}>
      <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home restaurants={restaurants} setRestaurants={setRestaurants}/>}/>
            
            <Route path="/restaurant/:_id" element={<Restaurant restaurants={restaurants}/>} />
            {authRoutes}

          </Routes>
        </div>
        </CartContextProvider>
      </BrowserRouter>
    </UserAuthContext.Provider>
  );
}

//loginStatus = {userJWT}

export default App;
