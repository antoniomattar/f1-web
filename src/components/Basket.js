import React from 'react'
import Title from './Title'
import M3U8Player from './M3U8Player'
import RefreshBtn from './RefreshBtn'
import WhatsAppGrpBtn from './WhatsAppGrpBtn'
import WhatsAppChatBtn from './WhatsAppChatBtn'
import ClapprComponent, { ClapprPlayer } from './ClapprPlayer'
import { Center } from '@chakra-ui/react'

const Basket = (props) => {
  return (
    <React.Fragment>

    <Title name='Basket Stream' />
    <WhatsAppGrpBtn/>
    <ClapprPlayer link={props.link}/>
    <RefreshBtn/>
    
    <WhatsAppChatBtn/>
      
    </React.Fragment>
  )
}

export default Basket