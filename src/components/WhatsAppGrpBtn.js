import React from 'react'
import { Button, Center, ChakraProvider,Link } from '@chakra-ui/react'

const WhatsAppGrpBtn = () => {
  return (
    <ChakraProvider>
            <Center>
    <Button colorScheme='green' justifySelf={"center"} margin="2.5"> <Link href="https://chat.whatsapp.com/KFlYV2V0xrIHYC0koe7VBE">JOIN OUR WHATSAPP GROUP</Link> </Button>
        </Center>
        </ChakraProvider>
  )
}

export default WhatsAppGrpBtn