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
import Menu from './Menu';
import Footer from './Footer';
import PageNotFound from './PageNotFound';
import WorldCup from './WorldCup';

function App() {
  return (
    <React.Fragment>
      <Menu/>
      <Router>
        <Routes>
          <Route path="/worldcup" element={<WorldCup name="WorldCup" link="https://www.youtube.com/embed/e8laLiWolGg"/>} />
          <Route exact path="/" element={<F1English name='English' link= '//ok.ru/videoembed/5148386991730?nochat=1'/>}/>
          <Route exact path="/arabic" element={<F1Arabic name='Arabic' link= '//ok.ru/videoembed/5148386991730'/>}/>
          <Route exact path="/basketball" element={<Basket name='Basket' link= '//ok.ru/videoembed/5095751884402'/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </Router>
    <Footer/>
    </React.Fragment>
    
    
    
  );
}

export default App;