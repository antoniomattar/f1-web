import React from "react";
import StreamChangeButton from './StreamChangeButton';
import RefreshBtn from "./RefreshBtn";
import WhatsAppGrpBtn from "./WhatsAppGrpBtn";
import WhatsAppChatBtn from "./WhatsAppChatBtn";
// import DOTDBtn from "./DOTDBtn";
import M3U8Player from "./M3U8Player";
import Divider from "./Divider";


// 5759078047346
// 5759078440562
const F1English = (props) => {

  return (
    
    <React.Fragment>
          <h1 className=" text-6xl mx-auto flex justify-center m-2">🏎️  Azerbaijan GP  🏎️</h1>
              <Divider name='Live streams'/>
              <div className="grid justify-center mx-auto">

                <div>
                    <h2 className="mx-auto font-bold" > STREAM 1 </h2>
                    <iframe className="border-solid border-8 border-red-600 rounded-xl m-6" width="640" height="360" src="//ok.ru/videoembed/5759078637170?nochat=1&autoplay=1" frameborder="0" allow="autoplay" allowfullscreen allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                    {/* 5759078440562 */}
                </div>
                
                <div>
                    <h2 className="mx-auto font-bold" > STREAM 2 </h2>
                    <M3U8Player link={props.link}/>
                </div>


              </div>

            <RefreshBtn/>
            <StreamChangeButton language='English' newlang='Arabic'/>
            <WhatsAppChatBtn/>
          
    </React.Fragment>

    
  );
};

export default F1English;