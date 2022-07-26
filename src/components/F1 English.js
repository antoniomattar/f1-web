import React from "react";
import Header from './Title'
import Menu from './Menu';
import Footer from './Footer'
import StreamChangeButton from './StreamChangeButton';
import Title from "./Title";
import M3U8Player from "./M3U8Player";
import RefreshBtn from "./RefreshBtn";


const F1English = (props) => {

  return (
    
    <React.Fragment>
      

          <Menu/>
          <Title name='English' />
          <RefreshBtn/>
          <M3U8Player link={props.link} name='English'/>
          <StreamChangeButton language='English' newlang='Arabic'/>
          <Footer/>
      
    </React.Fragment>
    
  );
};

export default F1English;