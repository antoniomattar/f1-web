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
          <Route exact path="/" element={<F1English name='English'/>}/>
          <Route exact path="/arabic" element={<F1Arabic name='Arabic'/>}/>
          <Route exact path="/basketball" element={<div>Hi</div>}/>
        </Routes>
      
    </Router>
    
    
  );
}

export default App;