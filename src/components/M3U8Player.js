import React from 'react'
import ReactPlayer from 'react-player'
import { Center } from '@chakra-ui/react';

const M3U8Player = (props) => {
  
  return (
    <>
    <Center>
      <div className='mx-auto w-fit border-solid border-8 border-red-600 rounded-xl m-6'>
        <ReactPlayer url={props.link} playing={true} controls={true} width={300} height={300} />
      </div>
    </Center>
    </>
  )
}

export default M3U8Player