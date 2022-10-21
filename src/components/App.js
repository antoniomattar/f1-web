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
          <Route exact path="/" element={<F1English name='English' link= 'https://ingest4-8818.boxcast.com/abhorrent-hook/rd4eeb8jh6wspdquiqz6/480p-ext.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9pbmdlc3Q0LTg4MTguYm94Y2FzdC5jb20vYWJob3JyZW50LWhvb2svcmQ0ZWViOGpoNndzcGRxdWlxejYvNDgwcC1leHQubTN1OCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY2NjQ4NzczNH19fV19&Signature=Ax9FXQokyL~fo4GL3StEpFktvk0ZeBHIOCHI3biTKVMD9ZZTGUGu352blAQnUUp3lOj5qZGD1UBrTxqYOvuX~dHaAakotChXHpxZ75rfWm5gEKbEkQQf6XaPL7d6aTqMEPeFovieOt4mfpH-yESby3W6nuI9pw-WnIokbz1f-2CrX96RSKtdu4Bi-fxOgdirHaLrg67CwWq7VJ6zPIuGgEB9Vr6NsQPa30io8AVK-1uReVxZ6~3pvlYM4TfA4N-sfdPu3SgVRFlhHxGsGqQxQm9zus~4x43P~e1-AV00G0qvzgjFxKkRo~nnaLofEC4mSWoIEQ~pUY1dIk34uwC6cQ__&Key-Pair-Id=APKAJ7GUCBQUK6NTWZCA'/>}/>
          <Route exact path="/arabic" element={<F1Arabic name='Arabic' link= 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_1660.m3u8'/>}/>
          <Route exact path="/basketball" element={<Basket name='Basket' link= 'https://cllive.itworkscdn.net/lbcdramalive/token=nva=1661785795~dirs=1~hash=01d143e9f08fff5fdc7cc/drama/lb2_360p_chunks.m3u8'/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
    </Router>
    <Footer/>
    </React.Fragment>
    
    
    
  );
}

export default App;