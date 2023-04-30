/* eslint-disable jsx-a11y/iframe-has-title */
import M3U8Player from './M3U8Player';
import RaceDetails from './RaceDetails';
import RefreshBtn from './RefreshBtn';
import StreamChangeButton from './StreamChangeButton';
import WhatsAppChatBtn from './WhatsAppChatBtn';
import WhatsAppGrpBtn from './WhatsAppGrpBtn';
import React from 'react';


function handleClick() {
  window.location.href =
    "https://wa.me/33626043435?text=I want to publish my brand on the F1 website!";
}

const F1Arabic = (props) => {
  return (
    <div id='all stream arabic' className=' mb-14'>
      <div className=' mx-auto grid justify-center items-center'>
        <RaceDetails/>
        <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded opacity-50 hover:opacity-100 p-6 mx-auto w-fit flex justify-center border-solid  m-3 items-center'
          onClick={handleClick}
        >
            ADS SPACE HERE
            <br/>CONTACT US
        </button>
      </div>
      <div className="mx-auto grid md:flex w-11/12 justify-center">
        <div className="m-0 grid justify-center">
          <h2 className="mx-auto font-bold h-fit"> STREAM 1 </h2>
          <iframe
            className=" w-fit rounded-xl border-8 border-solid border-red-600"
            src="//ok.ru/videoembed/4855918829257?nochat=1"
            frameborder="0"
            allow="autoplay"
            allowfullscreen
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
          {/* 5759078440562 */}
        </div>

        <div className="grid justify-center m-6">
          <StreamChangeButton language="Arabic" newlang="English" />
          <WhatsAppGrpBtn />
          <RefreshBtn />
        </div>

        <div className="grid justify-center">
          <h2 className="mx-auto font-bold"> STREAM 2 </h2>
          <M3U8Player link={props.link} />
        </div>
      </div>

      <WhatsAppChatBtn />
    </div>
  );
};

export default F1Arabic;