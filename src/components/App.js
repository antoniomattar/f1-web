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
                link2="https://vladrums.com/images/0021.m3u8?md5=8m7yuJ6MSTFklrCf2VyrGw&expires=1699218130"
                link1="https://storage.googleapis.com/asdfrgsdcefmqwed/mux_video_ts/index-1.m3u8"
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
