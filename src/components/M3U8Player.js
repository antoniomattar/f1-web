import React from 'react'
import ReactPlayer from 'react-player'
import Clappr from 'clappr';

const M3U8Player = (props) => {
  const source = props.link;
  
  return (
    <>
    <ReactPlayer url={source} playing={true} controls={true} width='100%' height='auto' />
    </>
  )
}

export default M3U8Player