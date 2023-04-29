/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import StreamChangeButton from './StreamChangeButton';
import RefreshBtn from "./RefreshBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";
// import DOTDBtn from "./DOTDBtn";
// import M3U8Player from "./M3U8Player";


// 5759078047346
// 5759078440562
const F1English = (props) => {

  return (
    
    <div>


          <h1 className="mx-auto flex justify-center m-6 font-extrabold font-sans text-green-900">🏎️  Azerbaijan GP  🏎️</h1>
              <div className="grid justify-center mx-auto w-11/12">

                <div className="grid justify-center">
                    <h2 className="mx-auto font-bold" > STREAM 1 </h2>
                    <iframe className=" w-fit border-solid border-8 border-red-600 rounded-xl m-6" src="//ok.ru/videoembed/5759078637170?nochat=1&autoplay=1" frameborder="0" allow="autoplay" allowfullscreen allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                    {/* 5759078440562 */}
                </div>
                <StreamChangeButton language='English' newlang='Arabic'/>
                <div className="grid justify-center">
                    <h2 className="mx-auto font-bold" > STREAM 2 </h2>
                    <iframe className=" w-fit border-solid border-8 border-red-600 rounded-xl m-6" src="//ok.ru/videoembed/5759078637170?nochat=1&autoplay=1" frameborder="0" allow="autoplay" allowfullscreen allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                    {/* <M3U8Player link={props.link}/> */}
                </div>


              </div>

            <RefreshBtn/>
            <WhatsAppChatBtn/>
        
    </div>

    
  );
};

export default F1English;