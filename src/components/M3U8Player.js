import React from 'react'
import ReactPlayer from 'react-player'
import { Center } from '@chakra-ui/react';

const M3U8Player = (props) => {
  const source = props.link;
  
  return (
    <>
    <Center>
    <ReactPlayer url={source} playing={true} controls={true} />
    </Center>
    </>
  )
}

export default M3U8Player