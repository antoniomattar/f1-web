import React from "react";
import StreamChangeButton from './StreamChangeButton';
import Title from "./Title";
import M3U8Player from "./M3U8Player";
import RefreshBtn from "./RefreshBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";
import ClapprPlayer from "./ClapprPlayer";
import { Button, Center, ChakraProvider,Divider, Heading, Highlight} from "@chakra-ui/react";
import DOTDBtn from "./DOTDBtn";


const WorldCup = (props) => {

  return (
    
    <React.Fragment>

        <ChakraProvider>
            
          <Title name="World Cup 🇶🇦 Stream"/>

          <Divider orientation='horizontal' />
          
          <WhatsAppGrpBtn/>

          <Divider orientation='horizontal' />
            <Center>
              <iframe width="560" height="315" src={props.link} frameborder="0" allow="autoplay"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
            </Center>
          <Divider orientation='horizontal' />

        </ChakraProvider>

          <RefreshBtn/>
          <WhatsAppChatBtn/>
          
    </React.Fragment>

    
  );
};

export default WorldCup;