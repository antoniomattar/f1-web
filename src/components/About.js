import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import {Text} from "@chakra-ui/react";

const About = () => {
  return (
    <React.Fragment>
      
    <Header/>
    <Menu />
    
    <br/>
    <Text fontSize='20px' color='black' margin="10">
    Hello World, 
I am just a young developper with big dreams who loves watching sports.
Tech Lover + Sport Lover = ? Why not a sports streaming site!
I will be trying to cover the maximum of games with the least of ads. Although ads are disgusting but at a certain point I will really need them to pursue paying the hosting costs.
Thank you!
    </Text>
    <Footer/>
      
    </React.Fragment>
  )
}

export default About