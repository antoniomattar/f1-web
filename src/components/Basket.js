import React from 'react'
import ReactHlsPlayer from 'react-hls-player';
import Header from './Header'
import Menu from './Menu'
import Title from './Title'
import M3U8Player from './M3U8Player'
import StreamChangeButton from './StreamChangeButton'
import Footer from './Footer'

const Basket = () => {
  return (
    <React.Fragment>
      
    <Header />
    <Menu />
    <Title name='Baskets' />
    <M3U8Player link='https://cllive.itworkscdn.net/lbcgrouplive/token=nva=1658837142~dirs=1~hash=08b42409fbef4246789d0/lbclive.smil/lbc_240p_chunks.m3u8'/>
    <Footer/>
      
    </React.Fragment>
  )
}

export default Basket