import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import F1Arabic from './F1 Arabic'
import F1English from './F1 English'
import Archive from './Archive'
import About from "./About"
import Menu from './Menu';
import Footer from './Footer';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className='grid'>
      <Menu/>
      <Router>
        <Routes>
          <Route exact path="/" element={<F1English name='English' link= 'https://ed-t1.edghst.me/plyvivo/reha9u2ifalezo2u5axo/chunklist.m3u8'/>}/>
          <Route exact path="/arabic" element={<F1Arabic name='Arabic' link= 'https://vsd90.mycdn.me/hls/3873712114290.m3u8/sig/OunF1RRqU5s/expires/1678027482123/srcIp/46.193.1.104/urls/185.226.52.66/clientType/0/srcAg/SAFARI_MAC/mid/5529139748466/3873712114290_low/index.m3u8'/>}/>
          <Route exact path="/archive" element={<Archive name='Archive'/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </Router>
    <Footer/>
    </div>
    
    
    
  );
}

export default App;