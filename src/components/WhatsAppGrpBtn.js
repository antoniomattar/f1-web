import React from 'react'
import { Button, Center, ChakraProvider } from '@chakra-ui/react'

const WhatsAppGrpBtn = () => {
  return (
    <ChakraProvider>
            <Center>
    <Button colorScheme='green' justifySelf={"center"}>JOIN OUR WHATSAPP GROUP</Button>
        </Center>
        </ChakraProvider>
  )
}

export default WhatsAppGrpBtn