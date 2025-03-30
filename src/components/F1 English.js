import IframePlayer from "./IframePlayer";
import React from "react";

export default function F1English() {
  return (
    <div className="bg-gray-100 text-gray-800 py-10 px-6">
      <h1 className="text-2xl font-bold mb-4 text-center">F1 English Stream</h1>
      <IframePlayer
        src="https://wikihznew.koskoros.ru/wikihz/wiki30/mono.m3u8"
        title="F1 English Stream"
      />
    </div>
  );
}
