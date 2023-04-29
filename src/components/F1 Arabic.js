/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import StreamChangeButton from './StreamChangeButton';
import RefreshBtn from "./RefreshBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";

const F1Arabic = (props) => {

  return (
    <div className="grid justify-center">
            <h1 className=" mx-auto">🏎️  Arabic Stream  🏎️</h1>
            <WhatsAppGrpBtn/>
            <iframe  className=" w-fit border-solid border-8 border-red-600 rounded-xl m-6" src="//ok.ru/videoembed/4855918829257?nochat=1&autoplay=1" frameborder="0" allow="autoplay" allowfullscreen></iframe>
            <RefreshBtn/>
            <StreamChangeButton language='Arabic' newlang='English'/>
            <WhatsAppChatBtn/>
        
    </div>
    
  );
};

export default F1Arabic;