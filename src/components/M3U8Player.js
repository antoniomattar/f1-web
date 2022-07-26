import React from 'react'
import ReactHlsPlayer from 'react-hls-player';
import ReactPlayer from 'react-player'

const M3U8Player = (props) => {
    const source = props.link;
  return (
    <>
    <ReactPlayer url={source} playing={true} controls={true} width='100%' height='auto'/>
    </>
    

    
  )
}

export default M3U8Player