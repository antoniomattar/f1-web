import React from "react";
import StreamChangeButton from './StreamChangeButton';
import Title from "./Title";
import M3U8Player from "./M3U8Player";
import RefreshBtn from "./RefreshBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";
import ClapprPlayer from "./ClapprPlayer";
import { Button, Center, ChakraProvider,Divider} from "@chakra-ui/react";


const F1English = (props) => {

  return (
    
    <React.Fragment>
          <Title name='English Stream' />
          <WhatsAppGrpBtn/>
          <Center>
          <iframe align="left" width="100%" height="560px" src={props.link} frameborder="0" allow="autoplay"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
          <iframe align="right" src="https://deadsimplechat.com/Oc1Wrsofi" width="auto" height="500"></iframe>
          </Center>
          <ChakraProvider>
            <Divider orientation='horizontal' />
          </ChakraProvider>
          <RefreshBtn/>
          <StreamChangeButton language='English' newlang='Arabic'/>
          <WhatsAppChatBtn/>
          <ChakraProvider>
          <Center>
          <Button colorScheme='red'  margin="2.5" justifySelf={"center"}><a href="https://www.formula1.com/en/vote.html">VOTE FOR DRIVER OF THE DAY</a></Button>
          </Center>
          </ChakraProvider>
          
    </React.Fragment>

    
  );
};

export default F1English;