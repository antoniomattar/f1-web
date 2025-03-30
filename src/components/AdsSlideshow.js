import React, { useEffect, useRef } from "react";

const ads = [
  "https://www.tawfeer.market/img/logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JqhKyTk0U1_44mvjTEY2vfDxUd9XzE3WgA&s",
  "https://snipssnacks.com/sites/default/files/2021-03/hero-slider/PROD-hero-1.jpg",
];

export default function AdsSlideshow() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const scrollAds = () => {
      scrollAmount += 1;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scrollAds, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden whitespace-nowrap my-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg"
    >
      <div className="inline-flex" style={{ width: "200%" }}>
        {ads.map((ad, index) => (
          <img
            key={index}
            src={ad}
            alt={`Ad ${index + 1}`}
            className="h-32 mx-2 rounded-md border border-gray-700 shadow-md"
          />
        ))}
        {ads.map((ad, index) => (
          <img
            key={`duplicate-${index}`}
            src={ad}
            alt={`Ad ${index + 1}`}
            className="h-32 mx-2 rounded-md border border-gray-700 shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
