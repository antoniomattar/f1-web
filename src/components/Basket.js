import React from 'react'
import Title from './Title'
import RefreshBtn from './RefreshBtn'
import WhatsAppGrpBtn from './WhatsAppGrpBtn'
import WhatsAppChatBtn from './WhatsAppChatBtn'
import ClapprPlayer from './ClapprPlayer'
import M3U8Player from './M3U8Player'
import Player from './Player'


const Basket = (props) => {
  return (
    <React.Fragment>

    <Title name='Basket Stream' />
    <WhatsAppGrpBtn/>
    <M3U8Player  link={props.link} name="Arabic"/>
    <RefreshBtn/>
    
    <WhatsAppChatBtn/>
      
    </React.Fragment>
  )
}

export default Basket