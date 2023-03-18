import React from "react";
import Title from "./Title";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";
import { Center, ChakraProvider,Divider} from "@chakra-ui/react";

const Basket = (props) => {
  return (
    <React.Fragment>
          <Title name='Archived Streams' />
          <WhatsAppGrpBtn/>
          <ChakraProvider>
          <Divider orientation='horizontal' />
            <h1>Sorry, no archives for the moment!</h1>
          <Divider orientation='horizontal' />
          </ChakraProvider>
          <WhatsAppChatBtn/>
          
    </React.Fragment>
  )
}

export default Basket