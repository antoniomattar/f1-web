import React, { useEffect, useRef } from "react";
import "./styles.css";

import "plyr-react/dist/plyr.css";
import Hls from "hls.js";
import Plyr, { APITypes, PlyrProps, PlyrInstance } from "plyr-react";

const MyComponent = () => {
  const ref = useRef(null);
  useEffect(() => {
    const loadVideo = async () => {
      const video = document.getElementById("plyr");
      var hls = new Hls();
      hls.loadSource("https://cllive.itworkscdn.net/lbcgrouplive/token=nva=1659116141~dirs=1~hash=019283910ee0077e7e376/lbclive.smil/lbc_chunks.m3u8");
      hls.attachMedia(video);
      // @ts-ignore
      ref.current.plyr.media = video;

      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        (ref.current.plyr).play();
      });
    };
    loadVideo();
  });

  return (
    <Plyr
      id="plyr"
      options={{ volume: 0.1 }}
      source={{}}
      ref={ref}
    />
  );
};

export default function App() {
  const supported = Hls.isSupported();

  return (
    <div>
      {supported ? <MyComponent /> : "HLS is not supported in your browser"}
    </div>
  );
}