import React from "react";
import Header from './Title'
import Menu from './Menu';
import Title from "./Title";
import Footer from './Footer'
import StreamChangeButton from './StreamChangeButton';
import M3U8Player from "./M3U8Player";
import RefreshBtn from "./RefreshBtn";

const F1Arabic = (props) => {

  return (
    
    <React.Fragment>
        
          
            <Menu/>
            <Title name='Arabic' />
            <RefreshBtn/>
            <M3U8Player link={props.link} name="Arabic"/>
            <StreamChangeButton language='Arabic' newlang='English'/>
            <Footer/>
        
    </React.Fragment>
    
  );
};

export default F1Arabic;