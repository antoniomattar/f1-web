import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import F1Arabic from './F1 Arabic'
import F1English from './F1 English'
import Basket from './Basket'
import About from "./About"
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Menu/>
      <Router>
        <Routes>
          <Route exact path="/" element={<F1English name='English' link= 'http://himes.wesah.xyz/scripts/NTY5MA==/1080p.m3u8'/>}/>
          <Route exact path="/arabic" element={<F1Arabic name='Arabic' link= 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_1660.m3u8'/>}/>
          <Route exact path="/basketball" element={<Basket name='Basket' link= 'https://cllive.itworkscdn.net/lbcdramalive/token=nva=1661785795~dirs=1~hash=01d143e9f08fff5fdc7cc/drama/lb2_360p_chunks.m3u8'/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
    </Router>
    <Footer/>
    </React.Fragment>
    
    
    
  );
}

export default App;