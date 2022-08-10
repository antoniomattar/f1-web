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
          <Route exact path="/" element={<F1English name='English' link= 'https://video-weaver.mrs02.hls.live-video.net/v1/playlist/CrMFPsvTz6HGYzCZSzyTRiTGYX2mwsVpKXUv72XubCQ6ZAzHBZuuT-94yDRTbWq2zZzxKGJjff558cxF2xvBEHoeIVt6w99PNoLdysudOtlY0PA9YQ_Py0ModmcrduNS1dHcCzceMS__VoeT5NhC2vGjydlXkFUzzfNXepYerW7Ev4b7KVFSgjhiFpzVuEFiKH6d2tYjS-Fxt7Vds3oTBXcw4Z4gE3dea_HdGhsLWKKsG00q-9t8xpxsHFzK-cWf4kB4hfnw0wlsg5-iLR0EfXsAe87lmK-a518GFJY-4H2e8XMqjJvaGjmcyJkCaLtCJXMTH_46YNwV3Yf5a59ulSAyTeQvP0TTk4WP__BC43VXgIgT8V2lI9UCjGuCn2ySZdsmUQf2hBhzSDhr8J-p8CZq5N2GofEpKtrGr-uAi-E_XLHYe9EbQqMHQIThWwoA4qPtWH7AiB_-cjBBTBu-zQtSW8uUChZCd3g2eJaIeYCOeUIfENVggwUin3M_vZKMtiDLrwhWiwqwJR7Ati1kzpOoA24_N0fbYw2ScteOeaPGVgU8laGxfAkOtyI6ymwUQZehSbgF2Zi19wkknhmY5ZOsDvf8zmpa1TFhIvG2QDfLWY7EdXLtus5m0AfOExzripsmu5RVRZ7e5xPwZ5qGaM_gpaTl9Ha-oq4avDSuXEEMY3rjAJecpLR-nI7VYYtrntpjoEGfGmELPXv8VyWElxEy47bbD3CAW6jId01TTO8shjOJK2hdnpBi9aqXZbyzCofjysj3Wq5wBsNZl1cECAc2KZ_BZIRF-yZm79PsXIqqEhQIYlOGO_73RXradBcABm72OBrPWTkCQG4Id08PkKAFxEd12IrrzlRKg3A3pDzP72qoobsQ7_Dt6Z8M7ARD3JWf9JeIq4FlngdvVKe0tvCQt9rCvxoMLE5qOSRGb9EPO1DlIAEqCXVzLWVhc3QtMTDeAg.m3u8'/>}/>
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