import React from 'react';
import { Center, ChakraProvider, Divider } from '@chakra-ui/react';
import WhatsAppChatBtn from './WhatsAppChatBtn';
import WhatsAppGrpBtn from './WhatsAppGrpBtn';

const Basket = (props) => {
  return (
    <div>
      <h1 className=" mx-auto">🏎️ ARCHIVES 🏎️</h1>
      <WhatsAppGrpBtn />
      <ChakraProvider>
        <Divider orientation="horizontal" />
        <Center>
          <h1>Sorry, no archives for the moment!</h1>
        </Center>
        <Divider orientation="horizontal" />
      </ChakraProvider>
      <WhatsAppChatBtn />
    </div>
  );
};

export default Basket;
