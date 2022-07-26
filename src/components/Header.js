import React from "react";
import { ChakraProvider, Heading } from '@chakra-ui/react'

const Header = () => {


    return (
        <ChakraProvider>
            <Heading display={'flex'} justifyContent={'center'} textColor={'red'} fontFamily={'monospace'}>F1 LEBANON 🇱🇧</Heading>
        </ChakraProvider>
        
    );
}

export default Header