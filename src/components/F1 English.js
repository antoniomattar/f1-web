/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import RaceDetails from './RaceDetails';
import RefreshBtn from './RefreshBtn';
import StreamChangeButton from './StreamChangeButton';
import WhatsAppChatBtn from './WhatsAppChatBtn';
import WhatsAppGrpBtn from './WhatsAppGrpBtn';

// import DOTDBtn from "./DOTDBtn";
// import M3U8Player from "./M3U8Player";

// 5759078047346
// 5759078440562
const F1English = (props) => {
  return (
    <div id="all stream">
      <div className=' m-6'>
        <RaceDetails/>
      </div>
      <div className="mx-auto grid w-11/12 justify-center">
        <div className="grid justify-center">
          <h2 className="mx-auto font-bold"> STREAM 1 </h2>
          <iframe
            className=" m-6 w-fit rounded-xl border-8 border-solid border-red-600"
            src="//ok.ru/videoembed/5759078637170"
            frameborder="0"
            allow="autoplay"
            allowfullscreen
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
          {/* 5759078440562 */}
        </div>

        <div className="grid justify-center">
          <StreamChangeButton language="English" newlang="Arabic" />
          <WhatsAppGrpBtn />
          <RefreshBtn />
        </div>

        <div className="grid justify-center">
          <h2 className="mx-auto font-bold"> STREAM 2 </h2>
          <iframe
            className=" m-6 w-fit rounded-xl border-8 border-solid border-red-600"
            src="//ok.ru/videoembed/5759078637170"
            frameborder="0"
            allowfullscreen
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
          {/* <M3U8Player link={props.link}/> */}
        </div>
      </div>
      <WhatsAppChatBtn />
    </div>
    
  );
};

export default F1English;