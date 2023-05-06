import { useEffect, useState } from "react";

export default function  AdsSlideshow({ ads }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % ads.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [ads.length, currentIndex]);

  return (
    <div className="slideshow-container m-6 ">
      {ads.map((ad, index) => (
        <a key={index} href={ad.link}>
          <img
            src={ad.src}
            alt={ad.alt}
            style={{ display: index === currentIndex ? "block" : "none" }}
            className=" max-h-80 w-full h-auto object-contain sm:object-cover mx-auto flex justify-center rounded-xl border-8 border-solid border-green-600"
          />
        </a>
      ))}
    </div>
  );
};

