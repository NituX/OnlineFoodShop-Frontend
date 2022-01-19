import './App.css';
import React, { useState } from 'react';
import Menu from './Menu.json';
import Restaurants from './restaurants.json';
import Header from './components/Header.js';
import Login from './components/Login/Login.js';
import Register from './components/Login/Register.js';
import Restaurant from './components/Restaurant/Restaurant.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {

  const [items] = useState(Menu.items);
  const [restaurants] = useState(Restaurants.items);

  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={ <Home items={restaurants}/> } />
          <Route path="/restaurant" element={ <Restaurant items={items} /> } />
          <Route path=":restaurantId" element={ <Restaurant items={restaurants} /> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
