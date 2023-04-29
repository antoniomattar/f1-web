import React from 'react';
import { ChakraProvider, Heading } from '@chakra-ui/react';

const Title = (props) => {
  return (
    <ChakraProvider>
      <Heading
        size="md"
        display={'flex'}
        justifyContent={'center'}
        fontFamily={'sans-serif'}
      >
        {props.name}
      </Heading>
    </ChakraProvider>
  );
};

export default Title;
