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

function App() {
  return (
    
    <Router>
        
        <Routes>
          <Route exact path="/" element={<F1English name='English' link= 'https://live-par-1-abr-cdn.livepush.io/live_abr_cdn/emaIqCGoZw-6/index.m3u8'/>}/>
          <Route exact path="/arabic" element={<F1Arabic name='Arabic' link= 'https://live-par-1-abr-cdn.livepush.io/live_abr_cdn/emaIqCGoZw-6/index.m3u8'/>}/>
          <Route exact path="/basketball" element={<Basket name='Basket' link= 'https://cllive.itworkscdn.net/lbcgrouplive/token=nva=1658837142~dirs=1~hash=08b42409fbef4246789d0/lbclive.smil/lbc_240p_chunks.m3u8'/>}/>
        </Routes>
      
    </Router>
    
    
  );
}

export default App;