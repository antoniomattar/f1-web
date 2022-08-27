import React, { useEffect } from "react";
import Clappr from "clappr";
import PlaybackRatePlugin from "clappr-playback-rate-plugin";
import QualitySelector from 'clappr-markers-plugin'
import { Center } from "@chakra-ui/react";

const ClapprComponent = ({ id, source, mute, height, width }) => {
  let clappr_player = null;

  useEffect(() => {
    clappr_player = new Clappr.Player({
      parentId: `#${id}`,
      source: source,
      mute,
      height,
      width,
      autoplay: true,
      plugins: [QualitySelector],
    });

    clappr_player.getPlugin("markers-plugin");

    return () => {
      clappr_player.destroy();
      clappr_player = null;
    };
  }, []);

  return (
    <div>
      <p id={id}></p>
    </div>
  );
};

export const ClapprPlayer = (props) => {
  return (
    
    <Center>
    <ClapprComponent
        id="video"
        source= {props.link}
        height={window.screen.availHeight}
        width={window.screen.availWidth}
        autoplay={true}
      />
    </Center>
      

  );
};

export default ClapprPlayer;