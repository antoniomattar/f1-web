/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import StreamChangeButton from './StreamChangeButton';
import RefreshBtn from "./RefreshBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import RaceDetails from "./RaceDetails";
// import DOTDBtn from "./DOTDBtn";
// import M3U8Player from "./M3U8Player";


// 5759078047346
// 5759078440562
const F1English = (props) => {

  return (
    
    <div id="all stream">
          <h1 className=" text-3xl mx-auto flex justify-center m-6 font-extrabold font-sans text-green-900">🏎️  Azerbaijan GP  🏎️</h1>
              <div className="flex justify-center mx-auto w-11/12">

                <div className="grid justify-center">
                    <h2 className="mx-auto font-bold" > STREAM 1 </h2>
                    <iframe className=" w-fit border-solid border-8 border-red-600 rounded-xl m-6" src="https://www.youtube.com/embed/jKlL6wvGrbc" frameborder="0" allow="autoplay" allowfullscreen allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                    {/* 5759078440562 */}
                </div>

                <div className="grid justify-center">
                    <StreamChangeButton language='English' newlang='Arabic'/>
                    <WhatsAppGrpBtn/>
                    <RefreshBtn/>
                </div>
                
                <div className="grid justify-center">
                    <h2 className="mx-auto font-bold" > STREAM 2 </h2>
                    <iframe className=" w-fit border-solid border-8 border-red-600 rounded-xl m-6" src="https://www.youtube.com/embed/jKlL6wvGrbc" frameborder="0" allowfullscreen allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                    {/* <M3U8Player link={props.link}/> */}
                </div>


              </div>
            <WhatsAppChatBtn/>
            <div>
              <RaceDetails/>
            </div>
    </div>
    

    
  );
};

export default F1English;