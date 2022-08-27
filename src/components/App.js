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
          <Route exact path="/" element={<F1English name='English' link= 'https://3d8d5d6c54f0.us-west-2.playback.live-video.net/api/video/v1/us-west-2.420449138386.channel.6ENA8sxIzaIP.m3u8'/>}/>
          <Route exact path="/arabic" element={<F1Arabic name='Arabic' link= 'https://www.youtube.com/watch?v=9jo51nJrO0k'/>}/>
          <Route exact path="/basketball" element={<Basket name='Basket' link= 'https://cllive.itworkscdn.net/lbcdramalive/token=nva=1661441291~dirs=1~hash=09cdb8f1f14cb460cc1d0/drama/lb2_360p_chunks.m3u8'/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
    </Router>
    <Footer/>
    </React.Fragment>
    
    
    
  );
}

export default App;