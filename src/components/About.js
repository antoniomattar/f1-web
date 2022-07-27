import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Title from './Title'
import Footer from './Footer'
import {Text} from "@chakra-ui/react";

const About = () => {
  return (
    <React.Fragment>
      
    <Header/>
    <Menu />
    <Title name='About' />
    <br/>
    <Text fontSize='50px' color='tomato' margin="10">
    FOLLOW ANTO.NIOMERHEB ON INSTAGRAM
    </Text>
    <Footer/>
      
    </React.Fragment>
  )
}

export default About