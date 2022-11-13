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


const F1English = (props) => {

  return (
    
    <React.Fragment>
      <ChakraProvider>
        <Center>
          <Heading lineHeight='tall'>
            <Highlight
              query='Lebanon'
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
            >
            ⬇️ Lebanon's 🏀 game ⬇️
            </Highlight>
          </Heading>
        </Center>
          <Divider orientation='horizontal' />
          <Center>
          <Button colorScheme='red'  margin="2.5" justifySelf={"center"}><a href="./basketball">WATCH LEBAN🏀N🏀</a></Button>
          </Center>
          <WhatsAppGrpBtn/>
          <Divider orientation='horizontal' />
            <Center>
              <iframe width="560" height="315" src={props.link} frameborder="0" allow="autoplay"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
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