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
          <ChakraProvider>
            <Divider orientation='horizontal' />
            <Center>
          <iframe width="560" height="315px" src={props.link} frameborder="0" allow="autoplay"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
            </Center>
            <Center>
          <Button colorScheme='red'  margin="2.5" justifySelf={"center"}><a href="https://www.formula1.com/en/vote.html">VOTE FOR DRIVER OF THE DAY</a></Button>
          </Center>
         <Divider orientation='horizontal' />
            <Center>
          <iframe src="https://deadsimplechat.com/Oc1Wrsofi" width="80%" height="400px" ></iframe>
            </Center>
            <Divider orientation='horizontal' />
          </ChakraProvider>
          <RefreshBtn/>
          <StreamChangeButton language='English' newlang='Arabic'/>
          <WhatsAppChatBtn/>
          
    </React.Fragment>

    
  );
};

export default F1English;