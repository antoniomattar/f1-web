import React from "react";
import Title from "./Title";
import RefreshBtn from "./RefreshBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";
import { Button, Center, ChakraProvider,Divider, Heading, Highlight} from "@chakra-ui/react";
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