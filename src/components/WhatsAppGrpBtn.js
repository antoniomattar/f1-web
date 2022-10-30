import React from 'react'
import { Button, Center, ChakraProvider,Link } from '@chakra-ui/react'

const WhatsAppGrpBtn = () => {
  return (
    <ChakraProvider>
            <Center>
    <Button size="xs" colorScheme='green' justifySelf={"center"} margin="2.5"> <a href="https://chat.whatsapp.com/Jw0CN2m2fNs6y3VsO8Riwm">JOIN OUR WHATSAPP GROUP</a> </Button>
        </Center>
        </ChakraProvider>
  )
}

export default WhatsAppGrpBtn