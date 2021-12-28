import './App.css';
import React, {useState} from 'react';
import Menu from './Menu.json';
import Header from './components/Header.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Restaurant from './components/Restaurant.js';

function App() {

  const [items] = useState(Menu.items);

  return (
    <div className="App">
      <Header/>
      <Restaurant
      items = {items}/>
    </div>

  );
}

export default App;
