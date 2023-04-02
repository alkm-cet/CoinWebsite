import './App.css';
import { useState, useEffect, useContext } from 'react';
import CoinContextProvider from './context/CoinContext';
import Coins from './components/Coins';
import logo from './images/Logo.svg'
import icons from './images/icons.png'
import HomePage from './pages/Home/HomePage';
import Market from './pages/Market/Market';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SinglePage from './pages/SinglePage/SinglePage';

function App() {
  return (
    <CoinContextProvider>
      <Router>
        <div className="App">

          <nav>
            <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>
              <img src={logo} alt="" className='logo'/>
            </Link>
            <div className="navmid">
              <Link to='/' style={{ color: 'black', textDecoration: 'none' }}><p>Home</p></Link>
              <Link to='/Market' style={{ color: 'black', textDecoration: 'none' }}><p>Market</p></Link>
            </div>
            <img src={icons} alt="" className='socials' />
          </nav>

          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/Market' element={<Market />}></Route>
            <Route path='/Market/:coinId' element={<SinglePage />}></Route>
          </Routes>




          <footer>
            <div className="footer1">
              <h2>About</h2>
              <p>Introducing</p>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
            </div>
            <div className="footer2">
              <h2>Contact</h2>
              <img src={icons} alt="" />
            </div>
            <div className="footer3">
              <h2>Newsletter</h2>
              <p>Please enter your e-mail to subscribe</p>
              <input type="text" placeholder='Your e-mail' />
              <button className='subBTN'>Subscribe</button>
            </div>
          </footer>



        </div>
      </Router>

    </CoinContextProvider>
  );
}

export default App;
