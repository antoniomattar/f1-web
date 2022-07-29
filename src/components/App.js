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
          <Route exact path="/" element={<F1English name='English' link= 'https://video-weaver.mrs02.hls.live-video.net/v1/playlist/CrYFVkQ7ltK8x63Fcand0cpVqHsYAZCaZ_6uB329pLFpwYQI5wooH8H-N6FeH-mIkjyunO-QzyW_mlnWojN-w63YvWZCOohf4H3sPWpcpaUeyXvjGNkJdvcGubPgdhBR8uIiaa-Hsl8Ix52oD4EJ52sjbMYzZRD8D6LsJblzu6SSJA9z51JPydcrAD0ZJWhIcL34g0Tzzu6edkaB3e001wo3LEvlAB7TXb0Z3rG82YE2qRRNnEp98zp5ATtRyjV95GRkP9YuXWDGtOBnkf3iFuKyzZDAfJB5v-pWksXGh6Ac99zYWPsXRWck1O7fk1b8ZEBHsW3VqyoD0NhtoEOX66TllBV_DpXB6m079kmx-YtfuG7dBj0_Y6sFDU13dwNN7MtDrqLV6kPt2Xes8iixPB99_8dx6LvIm7uHvIAoEX4YfDB5kDPMnVqIGd5UkIuU09tJbL4X4ebd8BWhnKqH-CrtPctlygJU4Rl2HUCqMraxeVOSIUZJim3Gyh-gLzURKP6swd0QFpcG8fInwAqykv2DM5ifVX-S-O2lM9eKWTWjcIA7ut8J8a_HqkTg5dhlX_8YwDmGBLRMv0rynkfHTJvD0SHKXmwjb6qkQ68S-O1142oBJmKDT-dugG3OY1JalfrULDaLHh3mfZGPkWNpQ-JG8jn7Bwv0NmGWjsfNGhDbeYZhCZDPtG_bG0CTC6j-lzPF6HMtlW7ykY_GKUFvkbxLzrdHFLHaD_b0Xu-xNKT1Ua3-HOqRnIuuFrzYK1SvOQ6QXYjB5qAwB5uW0axshjYFExWHZFaW-5j6PANo7bNpMEmPhZ3mLBlxKZ8mX3bKSnKjJf8HWUjBSgsGPGjLbfqEyTdIWfrRSCMC7vkviNJqhn1rH7Q7aORAlwwGYvQkdOmEwj77kf2Grf7i6hcnCVYst5vhaOA6hhoMHeljy_NnTCMBB0H9IAEqCWV1LXdlc3QtMjCnBA.m3u8'/>}/>
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