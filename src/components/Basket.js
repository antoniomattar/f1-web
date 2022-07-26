import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Title from './Title'
import M3U8Player from './M3U8Player'
import Footer from './Footer'

const Basket = (props) => {
  return (
    <React.Fragment>
      
    
    <Menu />
    <Title name='Basket' />
    <M3U8Player link={props.link} name="Basket"/>
    <Footer/>
      
    </React.Fragment>
  )
}

export default Basket