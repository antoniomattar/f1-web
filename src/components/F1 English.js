import IframePlayer from "./IframePlayer";
import React from "react";

export default function F1English() {
  return (
    <div className="bg-gray-100 text-gray-800 py-10 px-6">
      <h1 className="text-2xl font-bold mb-4 text-center">F1 English Stream</h1>
      <IframePlayer
        src="https://c58bx6vat7sxiexj.freshsoup.shop/v4/variant/VE1gTdz0mLzRnLv52bt9SMhFjdtM3ajFmc09SZlFjZlFGN1gjM0MWL5I2M50iNhdDNtAzYyUTLmlTZ5ITZjN2L.m3u8?md5=kv1Ew8ekZggT4P-WuEpTjA&expires=1745213437"
        title="F1 English Stream"
      />
    </div>
  );
}
