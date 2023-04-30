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
                link="https://sportsgala.one/yayinch10.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9NC8zMC8yMDIzIDExOjA4OjQxIEFNJmhhc2hfdmFsdWU9d2V2SU01KzZuVDFLZGtONTA4M3R2UT09JnZhbGlkbWludXRlcz03MjAmaWQ9NDYuMTkzLjEuMTA0JnN0cm1fbGVuPTU="
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
