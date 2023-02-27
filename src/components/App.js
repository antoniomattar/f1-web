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
    <React.Fragment>
      <Menu/>
      <Router>
        <Routes>
          <Route exact path="/" element={<F1English name='English' link= 'https://cllive.itworkscdn.net/lbcdramalive/token=nva=1677487523~dirs=1~hash=0f0c72cebe65696539e15/drama/lb2_360p_chunks.m3u8'/>}/>
          <Route exact path="/arabic" element={<F1Arabic name='Arabic' link= 'https://cllive.itworkscdn.net/lbcdramalive/token=nva=1677487523~dirs=1~hash=0f0c72cebe65696539e15/drama/lb2_360p_chunks.m3u8'/>}/>
          <Route exact path="/archive" element={<Archive name='Archive'/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </Router>
    <Footer/>
    </React.Fragment>
    
    
    
  );
}

export default App;