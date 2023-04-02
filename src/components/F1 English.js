import React from "react";
import StreamChangeButton from './StreamChangeButton';
import Title from "./Title";
import RefreshBtn from "./RefreshBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";
import { Button, Center, ChakraProvider,Divider} from "@chakra-ui/react";
// import DOTDBtn from "./DOTDBtn";
import M3U8Player from "./M3U8Player";


const F1English = (props) => {

  return (
    
    <React.Fragment>
          <Title name='🏎️  Australian 🦘 GP  🏎️' />
            <WhatsAppGrpBtn/>

            <Title name="STREAM 1"/>

            <Center>
            <iframe width="640" height="360" src="//ok.ru/videoembed/5759068085874?nochat=1&autoplay=1" frameborder="0" allow="autoplay" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
            </Center>

            <Title name="STREAM 2"/>

            <Center>
            <M3U8Player link="https://ds1.sportea.online/stream/ch10/index.fmp4.m3u8"/>
            </Center>


            <RefreshBtn/>
            <StreamChangeButton language='English' newlang='Arabic'/>
            <WhatsAppChatBtn/>
          
    </React.Fragment>

    
  );
};

export default F1English;