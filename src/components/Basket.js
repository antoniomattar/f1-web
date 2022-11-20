import React from "react";
import StreamChangeButton from './StreamChangeButton';
import Title from "./Title";
import RefreshBtn from "./RefreshBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";
import { Center, ChakraProvider,Divider} from "@chakra-ui/react";

const Basket = (props) => {
  return (
    // <React.Fragment>

    // <Title name='Basket Stream' />
    // <WhatsAppGrpBtn/>
    // <M3U8Player  link={props.link} name="Arabic"/>
    // <RefreshBtn/>
    
    // <WhatsAppChatBtn/>
      
    // </React.Fragment>
    <React.Fragment>
          <Title name='Basketball🏀 Stream' />
          <WhatsAppGrpBtn/>
          <ChakraProvider>
          <Divider orientation='horizontal' />
            <Center>
              <iframe width="560" height="315" src={props.link} frameborder="0" allow="autoplay"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
            </Center>
          <Divider orientation='horizontal' />
          </ChakraProvider>
          <RefreshBtn/>
          <StreamChangeButton language='English' newlang='Arabic'/>
          <WhatsAppChatBtn/>
          
    </React.Fragment>
  )
}

export default Basket