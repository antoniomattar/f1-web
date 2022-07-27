import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Title from './Title'
import M3U8Player from './M3U8Player'
import Footer from './Footer'
import RefreshBtn from './RefreshBtn'
import WhatsAppGrpBtn from './WhatsAppGrpBtn'

const Basket = (props) => {
  return (
    <React.Fragment>
      
    <Header/>
    <Menu />
    <Title name='Basket Stream' />
    <WhatsAppGrpBtn/>
    <M3U8Player link={props.link} name="Basket"/>
    <RefreshBtn/>
    <Footer/>
    {/* WhatsApp icon */}
    <a
              href="https://wa.me/2348100000000"
              class="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
      
    </React.Fragment>
  )
}

export default Basket