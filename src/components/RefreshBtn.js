import React from 'react'
import { useToast, Button, ChakraProvider, Center} from '@chakra-ui/react'

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
            <Center>
                    <Button colorScheme='blue'  margin="2.5" justifySelf={"center"} onClick={async () => {
                    toast({
                      containerStyle: {
                      
                      },
                    });
                    window.location.reload();
                  }}>
                    REFRESH
                    </Button>
          </Center>
        </ChakraProvider>
      )
    }

export default RefreshBtn