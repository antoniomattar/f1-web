import React from 'react'
import ReactHlsPlayer from 'react-hls-player';
const M3U8Player = (props) => {
    const source = props.link;
  return (
    <ReactHlsPlayer
    src = {source}
    autoPlay={true}
    controls={true}
    width="100%"
    height="auto"
    />
  )
}

export default M3U8Player