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

function App() {
  return (
    
    <Router>
        
        <Routes>
          <Route exact path="/" element={<F1English name='English' link= 'https://www.youtube.com/watch?v=9jo51nJrO0k'/>}/>
          <Route exact path="/arabic" element={<F1Arabic name='Arabic' link= 'https://www.youtube.com/watch?v=9jo51nJrO0k'/>}/>
          <Route exact path="/basketball" element={<Basket name='Basket' link= 'https://www.youtube.com/watch?v=9jo51nJrO0k'/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      
    </Router>
    
    
  );
}

export default App;