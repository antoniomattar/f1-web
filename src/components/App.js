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
          <Route exact path="/" element={<F1English name='English' link= 'https://d9105ej8z52sui.cloudfront.net/stream/live.m3u8'/>}/>
          <Route exact path="/arabic" element={<F1Arabic name='Arabic' link= 'https://www.youtube.com/watch?v=9jo51nJrO0k'/>}/>
          <Route exact path="/basketball" element={<Basket name='Basket' link= 'https://www.youtube.com/watch?v=9jo51nJrO0k'/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      
    </Router>
    <Footer/>
    </React.Fragment>
    
    
    
  );
}

export default App;