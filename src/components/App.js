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
import { Center } from '@chakra-ui/react';

function App() {
  return (
    <React.Fragment>
      <Menu/>
      <Router>
        <Routes>
          <Route exact path="/" element={<F1English name='English' link= '//ok.ru/videoembed/5080838315634'/>}/>
          <Route exact path="/arabic" element={<F1Arabic name='Arabic' link= '//ok.ru/videoembed/5080838315634'/>}/>
          <Route exact path="/basketball" element={<Basket name='Basket' link= '//ok.ru/videoembed/5095751884402'/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
    </Router>
    <Footer/>
    </React.Fragment>
    
    
    
  );
}

export default App;