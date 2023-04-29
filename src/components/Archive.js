import React from "react";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";
import { Center, ChakraProvider,Divider} from "@chakra-ui/react";

const Basket = (props) => {
  return (
    <React.Fragment>
          <h1 className=" mx-auto">🏎️  ARCHIVES 🏎️</h1>
          <WhatsAppGrpBtn/>
          <ChakraProvider>
          <Divider orientation='horizontal' />
          <Center>
          <h1>Sorry, no archives for the moment!</h1>
          </Center>
          <Divider orientation='horizontal' />
          </ChakraProvider>
          <WhatsAppChatBtn/>
          
    </React.Fragment>
  )
}

export default Basket