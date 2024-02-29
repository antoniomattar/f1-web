import About from "./About";
import "./App.css";
import Archive from "./Archive";
import F1Arabic from "./F1 Arabic";
import F1English from "./F1 English";
import Footer from "./Footer";
import Menu from "./Menu";
import PageNotFound from "./PageNotFound";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
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
                link2="https://pl.asfghjjk4.shop/playlist/19865/afsvvvvv.101streams.online/caxi.m3u8 "
                link1="https://pl.asfghjjk4.shop/playlist/19865/afsvvvvv.101streams.online/caxi.m3u8 "
              />
            }
          />
          <Route
            exact
            path="/arabic"
            element={
              <F1Arabic
                name="Arabic"
                link="https://ddy5.hlsjs.ru/ddy5/premium615/tracks-v1a1/mono.m3u8"
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
