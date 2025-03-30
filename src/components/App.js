import AdsSlideshow from "./AdsSlideshow";
import F1Arabic from "./F1 Arabic";
import F1English from "./F1 English";
import Footer from "./Footer";
import Menu from "./Menu";
import RaceDetails from "./RaceDetails";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Archive from "./Archive";
import About from "./About";
import PageNotFound from "./PageNotFound";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Menu />
      <Router>
        <div className="flex-grow">
          <AdsSlideshow />
          <div className="flex justify-center space-x-4 my-6">
            <a
              href="/"
              className="px-4 py-2 bg-red-600 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-red-700 transition duration-300 shadow-md border border-black"
            >
              English Stream
            </a>
            <a
              href="/arabic"
              className="px-4 py-2 bg-red-600 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-red-700 transition duration-300 shadow-md border border-black"
            >
              Arabic Stream
            </a>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            <div className="md:col-span-3 flex justify-center w-full">
              <div className="w-full">
                <Routes>
                  <Route exact path="/" element={<F1English />} />
                  <Route exact path="/arabic" element={<F1Arabic />} />
                  <Route exact path="/archive" element={<Archive />} />
                  <Route exact path="/about" element={<About />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </div>
            </div>
            <div className="md:col-span-1 flex flex-col items-center space-y-6">
              <RaceDetails
                raceName="Grand Prix of Bahrain 🏁"
                date="30 March 2025 📅"
                time="18:00 GMT ⏰"
              />
              <WhatsAppGrpBtn />
            </div>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
