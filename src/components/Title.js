import { ChakraProvider, Heading } from '@chakra-ui/react';
import React from 'react';

const Title = (props) => {

    return (
        <ChakraProvider>
            <Heading display={'flex'} justifyContent={'center'} fontFamily={'sans-serif'}>{props.name} STREAM</Heading>
        </ChakraProvider>
        
    );


}

export default Title