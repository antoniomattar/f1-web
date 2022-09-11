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
          <Route exact path="/" element={<F1English name='English' link= 'https://642b5f777a5c.us-west-2.playback.live-video.net/api/video/v1/us-west-2.864319490141.channel.p3XUkcZ0LdSv.m3u8'/>}/>
          <Route exact path="/arabic" element={<F1Arabic name='Arabic' link= 'https://642b5f777a5c.us-west-2.playback.live-video.net/api/video/v1/us-west-2.864319490141.channel.p3XUkcZ0LdSv.m3u8'/>}/>
          <Route exact path="/basketball" element={<Basket name='Basket' link= 'https://cllive.itworkscdn.net/lbcdramalive/token=nva=1661785795~dirs=1~hash=01d143e9f08fff5fdc7cc/drama/lb2_360p_chunks.m3u8'/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
    </Router>
    <Footer/>
    </React.Fragment>
    
    
    
  );
}

export default App;