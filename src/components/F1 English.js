import React from "react";
import StreamChangeButton from './StreamChangeButton';
import Title from "./Title";
import RefreshBtn from "./RefreshBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";
import { Button, Center, ChakraProvider,Divider} from "@chakra-ui/react";
// import DOTDBtn from "./DOTDBtn";
import M3U8Player from "./M3U8Player";


// 5759078047346
// 5759078440562
const F1English = (props) => {

  return (
    
    <React.Fragment>
          <Title name='🏎️  Australian 🦘 GP  🏎️' />
            <WhatsAppGrpBtn/>

            <Title name="STREAM 1"/>

            <Center>
            <M3U8Player link="https://ddy6.onlinewebtv.lol/ddy6/premium424/tracks-v1a1/mono.m3u8"/>
            </Center>

            <Title name="STREAM 2"/>

            <Center>
            <iframe width="640" height="360" src="//ok.ru/videoembed/5759068085874?nochat=1&autoplay=1" frameborder="0" allow="autoplay" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
            </Center>


            <RefreshBtn/>
            <StreamChangeButton language='English' newlang='Arabic'/>
            <WhatsAppChatBtn/>
          
    </React.Fragment>

    
  );
};

export default F1English;