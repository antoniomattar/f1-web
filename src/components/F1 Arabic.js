/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import M3U8Player from './M3U8Player';
import RefreshBtn from './RefreshBtn';
import StreamChangeButton from './StreamChangeButton';
import WhatsAppChatBtn from './WhatsAppChatBtn';
import WhatsAppGrpBtn from './WhatsAppGrpBtn';

const F1Arabic = (props) => {
  return (
    <div>
      <h1 className=" m-6 mx-auto flex justify-center font-sans text-3xl font-extrabold text-green-900">
        🏎️ Azerbaijan GP 🏎️
      </h1>
      <div className="mx-auto grid w-11/12 justify-center">
        <div className="grid justify-center">
          <h2 className="mx-auto font-bold"> STREAM 1 </h2>
          <iframe
            className=" m-6 w-fit rounded-xl border-8 border-solid border-red-600"
            src="//ok.ru/videoembed/4855918829257?nochat=1"
            frameborder="0"
            allow="autoplay"
            allowfullscreen
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
          {/* 5759078440562 */}
        </div>
        <StreamChangeButton language="Arabic" newlang="English" />
        <WhatsAppGrpBtn />
        <RefreshBtn />
        <div className="grid w-fit justify-center">
          <h2 className="mx-auto font-bold"> STREAM 2 </h2>
          <M3U8Player link={props.link} />
        </div>
      </div>

      <WhatsAppChatBtn />
    </div>
  );
};

export default F1Arabic;
