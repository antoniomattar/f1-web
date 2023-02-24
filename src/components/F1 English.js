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
          <Title name='English Stream' />
            <WhatsAppGrpBtn/>
            <M3U8Player link={props.link} name="Arabic"/>
            <RefreshBtn/>
            <StreamChangeButton language='Arabic' newlang='English'/>
            <WhatsAppChatBtn/>
          
    </React.Fragment>

    
  );
};

export default F1English;