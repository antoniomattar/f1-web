import React from "react";
import StreamChangeButton from './StreamChangeButton';
import RefreshBtn from "./RefreshBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";

const F1Arabic = (props) => {

  return (
    
    <React.Fragment>
            <h1 className=" mx-auto">🏎️  Arabic Stream  🏎️</h1>
            <WhatsAppGrpBtn/>
            <iframe width="640" height="360" src="//ok.ru/videoembed/5529139748466?nochat=1&autoplay=1" frameborder="0" allow="autoplay" allowfullscreen></iframe>
            <RefreshBtn/>
            <StreamChangeButton language='Arabic' newlang='English'/>
            <WhatsAppChatBtn/>
        
    </React.Fragment>
    
  );
};

export default F1Arabic;