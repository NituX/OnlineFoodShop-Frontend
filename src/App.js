import './App.css';
import React, { useState } from 'react';
import Menu from './Menu.json';
import Header from './components/Header.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Restaurant from './components/Restaurant.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {

  const [items] = useState(Menu.items);

  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/restaurant" element={ <Restaurant items={items} /> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
