import React from "react";
import StreamChangeButton from './StreamChangeButton';
import Title from "./Title";
import RefreshBtn from "./RefreshBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";
import { Button, Center, ChakraProvider,Divider} from "@chakra-ui/react";
import DOTDBtn from "./DOTDBtn";


const F1English = (props) => {

  return (
    
    <React.Fragment>
      <ChakraProvider>
          <Title name="English Stream"/>
          <Divider orientation='horizontal' />
          <Center>
          <Button colorScheme='red'  margin="2.5" justifySelf={"center"}><a href="./basketball">WATCH BASKETBALL🏀</a></Button>
          </Center>
          <WhatsAppGrpBtn/>
          <Divider orientation='horizontal' />
            <Center>
            <M3U8Player link={props.link} name="BASKETBALL"/>
            </Center>
          <DOTDBtn/>
          <Divider orientation='horizontal' />
          </ChakraProvider>
          <RefreshBtn/>
          <StreamChangeButton language='English' newlang='Arabic'/>
          <WhatsAppChatBtn/>
          
    </React.Fragment>

    
  );
};

export default F1English;