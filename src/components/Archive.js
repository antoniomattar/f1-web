import React from 'react';
import { Center, ChakraProvider, Divider } from '@chakra-ui/react';
import WhatsAppChatBtn from './WhatsAppChatBtn';
import WhatsAppGrpBtn from './WhatsAppGrpBtn';

const Basket = (props) => {
  return (
    <div>
      <h1 className=" p-6 text-4xl font-extrabold text-center mx-auto">🏎️ ARCHIVES 🏎️</h1>
      <ChakraProvider>
        <Divider orientation="horizontal" />
        <Center>
          <h1 className=' text-2xl text-center p-64'>Sorry, no archives for the moment!</h1>
        </Center>
        <Divider orientation="horizontal" />
      </ChakraProvider>
      <WhatsAppChatBtn />
    </div>
  );
};

export default Basket;
