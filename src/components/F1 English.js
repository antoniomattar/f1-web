import IframePlayer from "./IframePlayer";
import React from "react";

export default function F1English() {
  return (
    <div className="bg-gray-100 text-gray-800 py-10 px-6">
      <h1 className="text-2xl font-bold mb-4 text-center">F1 English Stream</h1>
      <IframePlayer
        src="https://stream-fastly.castr.com/5b9352dbda7b8c769937e459/live_2361c920455111ea85db6911fe397b9e/index.fmp4.m3u8"
        title="F1 English Stream"
      />
    </div>
  );
}
