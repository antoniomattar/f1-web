import Hls from "hls.js";
import React, { useEffect, useRef } from "react";

export default function IframePlayer({ src, title }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
      return () => hls.destroy();
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = src;
    }
  }, [src]);

  return (
    <div className="relative bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <video
        ref={videoRef}
        controls
        className="w-full h-96 md:h-[500px] lg:h-[600px] z-0"
        title={title}
      />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-black/70 text-white text-center z-20">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </div>
  );
}
