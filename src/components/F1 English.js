import React from "react";
import { useNavigate } from "react-router-dom";
import Header from './Title'
import Menu from './Menu';
import Footer from './Footer'
import StreamChangeButton from './StreamChangeButton';
import EmbedVideoPlayer from "./EmbedVideoPlayer";
import { ChakraProvider, Heading } from '@chakra-ui/react'
import Title from "./Title";

const F1English = (props) => {

  return (
    
    <React.Fragment>
      
    <Header />
    <Menu />
    <Title name='English' />
    <EmbedVideoPlayer/>
    <StreamChangeButton language='English' newlang='Arabic'/>
    <Footer/>
      
    </React.Fragment>
    
  );
};

export default F1English;