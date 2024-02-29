// components/ShakaPlayer.js
import React, { useEffect, useRef } from "react";


const ShakaPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const onBeforeLoad = (shaka_player) => {
      shaka_player
        .getNetworkingEngine()
        .registerRequestFilter(function (type, request) {
          if (type === 2) {
            // shaka.net.NetworkingEngine.RequestType.LICENSE
            console.log("477");
          }
        });
      shaka_player
        .getNetworkingEngine()
        .registerResponseFilter(function (type, response) {
          if (type === 2) {
            // shaka.net.NetworkingEngine.RequestType.LICENSE
            console.log("555");
          }
        });
    };

    const initPlayer = async () => {
      const Clappr = require("clappr");
      const DashShakaPlayback = require("dash-shaka-playback");
      const QualitySelector = require("videojs-hls-quality-selector");

      const player = new Clappr.Player({
        parentId: "#player",
        autoPlay: true,
        plugins: [DashShakaPlayback, QualitySelector],
        // add quality selector plugin
        qualitySelector: {
          displayCurrentQuality: true,

        },
        shakaConfiguration: {
          abr: {
            capLevelToPlayerSize: true,
            enabled: true,
            defaultBandwidthEstimate: 5,
            switchInterval: 1,
            bandwidthUpgradeTarget: 0.85,
            bandwidthDowngradeTarget: 0.95,
            restrictions: {
              minWidth: 0,
              maxWidth: null,
              minHeight: 0,
              maxHeight: null,
              minPixels: 0,
              maxPixels: null,
              minBandwidth: 0,
              maxBandwidth: null,
            },
          },
          manifest: {
            retryParameters: {
              maxAttempts: 2,
              backoffFactor: 2,
              baseDelay: 1000,
              timeout: 0,
              fuzzFactor: 0.5,
            },
            dash: {
              autoCorrectDrift: true,
              defaultPresentationDelay: 10,
              ignoreDrmInfo: false,
              ignoreMinBufferTime: false,
              xlinkFailGracefully: false,
            },
          },
          drm: {
            clearKeys: {
              "b8763ccad3d146c2b15f8a77a4d6d733":
                "ab87f6ae46b2dc187bd94cbb48cfe074",
            },
            retryParameters: {
              maxAttempts: 2,
              baseDelay: 1000,
              fuzzFactor: 0.5,
              backoffFactor: 2,
            },
          },
        },
        shakaOnBeforeLoad: onBeforeLoad,
        source:
          "https://ssc-2-on-prem-ak.akamaized.net/out/v1/d9a2acf5f809461ca47714440fcbc0f4/index.mpd",
        height: 360,
        width: 640,
      });
    };

    initPlayer();
  }, []);

  return (
      <div id="player" className="mx-auto w-fit h-fit rounded-xl border-8 border-solid border-red-600"/>
  );
};

export default ShakaPlayer;