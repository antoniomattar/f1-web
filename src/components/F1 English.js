import React from "react";
import StreamChangeButton from './StreamChangeButton';
import Title from "./Title";
import ClapprPlayer from "./ClapprPlayer";
import RefreshBtn from "./RefreshBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";


const F1English = (props) => {

  return (
    
    <React.Fragment>
          <Title name='English Stream' />
          <WhatsAppGrpBtn/>
          <ClapprPlayer link={props.link}/>
          <RefreshBtn/>
          <StreamChangeButton language='English' newlang='Arabic'/>
          <WhatsAppChatBtn/>
    </React.Fragment>
    
  );
};

export default F1English;