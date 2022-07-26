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
          <Route exact path="/" element={<F1English name='English' link= 'https://cllive.itworkscdn.net/lbcgrouplive/token=nva=1658852057~dirs=1~hash=0ef82e9fa5910e9c1f59c/lbclive.smil/lbc_240p_chunks.m3u8'/>}/>
          <Route exact path="/arabic" element={<F1Arabic name='Arabic' link= 'https://cllive.itworkscdn.net/lbcgrouplive/token=nva=1658852057~dirs=1~hash=0ef82e9fa5910e9c1f59c/lbclive.smil/lbc_240p_chunks.m3u8'/>}/>
          <Route exact path="/basketball" element={<Basket name='Basket' link= 'https://cllive.itworkscdn.net/lbcgrouplive/token=nva=1658852057~dirs=1~hash=0ef82e9fa5910e9c1f59c/lbclive.smil/lbc_240p_chunks.m3u8'/>}/>
        </Routes>
      
    </Router>
    
    
  );
}

export default App;