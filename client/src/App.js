import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu.json';
import Restaurants from './restaurants.json';
import Header from './components/Header.js';
import Login from './components/Login/Login.js';
import Register from './components/Login/Register.js';
import Restaurant from './components/Restaurant/Restaurant.js';
import Home from './components/Home';
import CartView from './components/Cart/CartView';

const storedJWT = window.localStorage.getItem('userAuthData');

function App() {

  const [items] = useState(Menu.items);
  const [restaurants] = useState(Restaurants.items);
  const [userJWT, setUserJWT] = useState(storedJWT);

  let authRoutes = 
  <>
    <Route path="/login" element={ <Login login = {newJWT => {
      setUserJWT(newJWT)
      window.localStorage.setItem('userAuthData', newJWT)} }/> }/>
    <Route path="/register" element={<Register/>} />
  </>

  if(userJWT != null) {
    authRoutes = 
    <>
      <Route path= "/cart" element = {<CartView/>} />
    </>
  }

  return (
    <BrowserRouter>
      <div className="App">
      <Header loginStatus = {userJWT} />
        <Routes>
          <Route path="/" element={ <Home items={restaurants}/> } />
          <Route path="/restaurant" element={ <Restaurant items={items} /> } />
          <Route path=":restaurantId" element={ <Restaurant items={restaurants} /> } />          
          {authRoutes}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
