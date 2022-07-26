import React from 'react'
import { useToast, Button, ChakraProvider } from '@chakra-ui/react'

const RefreshBtn = () => {
    const toast = useToast({
        position: 'top',
        title: 'Stream is updated',
        containerStyle: {
          width: '800px',
          maxWidth: '100%',
        },
      })
      // Or via trigger
      // Style here will overwrite the entire style above
      return (
        <ChakraProvider>
        <Button colorScheme='blue' justifySelf={"left"} margin='2.5'
          onClick={async () => {
            toast({
              containerStyle: {
               
              },
            });
            window.location.reload();
          }}
        >
            REFRESH
        </Button>
        </ChakraProvider>
      )
    }

export default RefreshBtn