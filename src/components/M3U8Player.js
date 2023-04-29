import React from 'react'
import ReactPlayer from 'react-player'
import { Center } from '@chakra-ui/react';

const M3U8Player = (props) => {
  const source = props.link;
  
  return (
    <>
    <Center>
      <div className='border-solid border-8 border-red-600 rounded-xl m-6'>
        <ReactPlayer url={source} playing={true} controls={true} />
      </div>
    </Center>
    </>
  )
}

export default M3U8Player