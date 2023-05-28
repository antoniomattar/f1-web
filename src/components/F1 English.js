/* eslint-disable jsx-a11y/iframe-has-title */
import AdsSlideshow from "./AdsSlideshow";
import M3U8Player from "./M3U8Player";
import RaceDetails from "./RaceDetails";
import RefreshBtn from "./RefreshBtn";
import StreamChangeButton from "./StreamChangeButton";
import WhatsAppChatBtn from "./WhatsAppChatBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import React from "react";

// import DOTDBtn from "./DOTDBtn";
// import M3U8Player from "./M3U8Player";

// 5759078047346
// 5759078440562

export default function F1English(props) {
  return (
    <div id="all stream english" className=" mb-14">
      <div className=" w-10/12 mx-auto grid justify-center items-center">
        <AdsSlideshow
          ads={[
            {
              src: "https://cdn-7.motorsport.com/images/amp/YBekW572/s1000/pierre-gasly-alphatauri-at03-y.jpg",
              alt: "Ad 1",
              link: "https://wa.me/33626043435?text=I want to publish ads on F1 website!",
            },
            {
              src: "https://imagescdn.mtv.com.lb/articles/818052262453.jpg?width=533&quality=100",
              alt: "Ad 2",
              link: "http://leb-basketball-site-next.vercel.app",
            },
          ]}
        />
      </div>
      <div className="mx-auto grid md:flex w-11/12 justify-center">
        <div className="grid justify-center">
          <h2 className="mx-auto font-bold"> STREAM 1 </h2>
          <iframe
            className="w-fit rounded-xl border-8 border-solid border-red-600"
            src="//ok.ru/videoembed/5759078637170"
            frameborder="0"
            allow="autoplay"
            allowfullscreen
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          />
          {/* 5759078440562 */}
        </div>

        <div className="grid justify-center m-6">
          <StreamChangeButton language="English" newlang="Arabic" />
          <WhatsAppGrpBtn />
          <RefreshBtn />
        </div>

        <div className="grid justify-center">
          <h2 className="mx-auto font-bold"> STREAM 2 </h2>
          <M3U8Player link={props.link} />
        </div>
      </div>
      <RaceDetails />
      <WhatsAppChatBtn />
    </div>
  );
}
