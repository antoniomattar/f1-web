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
          {/* WhatsApp icon */}
          <a
              href="https://wa.me/33626043435"
              class="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
      
    </React.Fragment>
    
  );
};

export default F1English;