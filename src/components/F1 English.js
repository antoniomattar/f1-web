import React from "react";
import Header from './Title'
import Menu from './Menu';
import Footer from './Footer'
import StreamChangeButton from './StreamChangeButton';
import Title from "./Title";
import M3U8Player from "./M3U8Player";
import RefreshBtn from "./RefreshBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";


const F1English = (props) => {

  return (
    
    <React.Fragment>
      
          <Header/>
          <Menu/>
          <Title name='English Stream' />
          <WhatsAppGrpBtn/>
          <M3U8Player link={props.link} name='English'/>
          <RefreshBtn/>
          <StreamChangeButton language='English' newlang='Arabic'/>
          <Footer/>
      
    </React.Fragment>
    
  );
};

export default F1English;