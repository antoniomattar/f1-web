import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import './App.css';
import Archive from './Archive';
import F1Arabic from './F1 Arabic';
import F1English from './F1 English';
import Footer from './Footer';
import Menu from './Menu';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="grid">
      <Menu />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <F1English
                name="English"
                link="https://ed-t1.edghst.me/plyvivo/reha9u2ifalezo2u5axo/chunklist.m3u8"
              />
            }
          />
          <Route
            exact
            path="/arabic"
            element={
              <F1Arabic
                name="Arabic"
                link="https://shls-live-event2-prod-dub.shahid.net/out/v1/0456ede1a39145d98b3d8c8062ddc998/index_7.m3u8"
              />
            }
          />
          <Route exact path="/archive" element={<Archive name="Archive" />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
