/* eslint-disable jsx-a11y/iframe-has-title */
import AdsSlideshow from "./AdsSlideshow";
import M3U8Player from "./M3U8Player";
import RaceDetails from "./RaceDetails";
import RefreshBtn from "./RefreshBtn";
import StreamChangeButton from "./StreamChangeButton";
import WhatsAppChatBtn from "./WhatsAppChatBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import React from "react";
import ShakaPlayer from "./ShakaPlayer";


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
              src: "https://pressover.news/wp-content/uploads/2022/11/placeholder.png",
              alt: "Ad 1",
              link: "#",
            }
          ]}
        />
      </div>
      <div className="mx-auto grid md:flex w-11/12 justify-center">
        <div className="grid justify-center">
          <h2 className="mx-auto font-bold"> STREAM 1 </h2>
          <M3U8Player link={props.link1} />
          {/* 5759078440562 */}
        </div>

        <div className="grid justify-center m-6">
          <StreamChangeButton language="English" newlang="Arabic" />
          <WhatsAppGrpBtn />
          <RefreshBtn />
        </div>

        <div className="grid justify-center">
          <h2 className="mx-auto font-bold"> STREAM 2 </h2>
          <ShakaPlayer/>
        </div>
      </div>
      <RaceDetails />
      <WhatsAppChatBtn />
    </div>
  );
}
