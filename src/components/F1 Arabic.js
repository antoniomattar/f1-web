import React from "react";
import { useNavigate } from "react-router-dom";
import Header from './Title'
import Menu from './Menu';
import Title from "./Title";
import Footer from './Footer'
import StreamChangeButton from './StreamChangeButton';
import EmbedVideoPlayer from "./EmbedVideoPlayer";
import { ChakraProvider } from '@chakra-ui/react'

const F1Arabic = (props) => {

  return (
    
    <React.Fragment>
        
            <Header />
            <Menu />
            <Title name='Arabic' />
            <EmbedVideoPlayer/>
            <StreamChangeButton language='Arabic' newlang='English'/>
            <Footer/>
        
    </React.Fragment>
    
  );
};

export default F1Arabic;