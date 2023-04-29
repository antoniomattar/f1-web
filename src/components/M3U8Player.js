import React from 'react'
import ReactPlayer from 'react-player'

const M3U8Player = (props) => {
  
  return (
    <>
      <div className='mx-auto w-fit border-solid border-8 border-red-600 rounded-xl m-6'>
        <ReactPlayer url={props.link} playing={true} controls={true} width={200} height={200} />
      </div>
    </>
  )
}

export default M3U8Player