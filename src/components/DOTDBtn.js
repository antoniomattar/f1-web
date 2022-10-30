import React, { Component } from 'react'
import { Button, Center, ChakraProvider,Link } from '@chakra-ui/react'

export class DOTDBtn extends Component {
  render() {
    return (
        <Center>
        <Button size="xs" colorScheme='red'  margin="2.5" justifySelf={"center"}><a href="https://www.formula1.com/en/vote.html">VOTE FOR DRIVER OF THE DAY</a></Button>
        </Center>
    )
  }
}

export default DOTDBtn