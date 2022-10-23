import React from "react";
import StreamChangeButton from './StreamChangeButton';
import Title from "./Title";
import M3U8Player from "./M3U8Player";
import RefreshBtn from "./RefreshBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";
import ClapprPlayer from "./ClapprPlayer";
import { Center } from "@chakra-ui/react";


const F1English = (props) => {

  return (
    
    <React.Fragment>
          <Title name='English Stream' />
          <WhatsAppGrpBtn/>
          <Center>
          <iframe width="560" height="315" src={props.link} frameborder="0" allow="autoplay"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
          </Center>
          <RefreshBtn/>
          <StreamChangeButton language='English' newlang='Arabic'/>
          <WhatsAppChatBtn/>
    </React.Fragment>

    
  );
};

export default F1English;