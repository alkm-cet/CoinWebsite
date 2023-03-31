import './App.css';
import { useState, useEffect, useContext } from 'react';
import CoinContextProvider from './context/CoinContext';
import Coins from './components/Coins';
import logo from './images/Logo.svg'
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <CoinContextProvider>
      <div className="App">

        <nav>
          <img src={logo} alt="" />
          <div className="navmid">
            <p>Home</p>
            <p>Market</p>
          </div>
        </nav>

        <HomePage />

      </div>
    </CoinContextProvider>
  );
}

export default App;
