import React from "react";
import StreamChangeButton from './StreamChangeButton';
import Title from "./Title";
import M3U8Player from "./M3U8Player";
import RefreshBtn from "./RefreshBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";


const F1English = (props) => {

  return (
    
    <React.Fragment>
          <Title name='English Stream' />
          <WhatsAppGrpBtn/>
          <M3U8Player link={props.link} name='English'/>
          <RefreshBtn/>
          <StreamChangeButton language='English' newlang='Arabic'/>
          
          <WhatsAppChatBtn/>
    </React.Fragment>
    
  );
};

export default F1English;