import React from "react";
import Header from './Title'
import Menu from './Menu';
import Title from "./Title";
import Footer from './Footer'
import StreamChangeButton from './StreamChangeButton';
import M3U8Player from "./M3U8Player";
import RefreshBtn from "./RefreshBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";

const F1Arabic = (props) => {

  return (
    
    <React.Fragment>
        
            <Header/>
            <Menu/>
            <Title name='Arabic Stream' />
            <WhatsAppGrpBtn/>
            <M3U8Player link={props.link} name="Arabic"/>
            <RefreshBtn/>
            <StreamChangeButton language='Arabic' newlang='English'/>
            <Footer/>
        
    </React.Fragment>
    
  );
};

export default F1Arabic;