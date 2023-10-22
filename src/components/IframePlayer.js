import React from 'react';

const IframePlayer = ({ props }) => {
  return (
    <div>
      <iframe
            title="video-player"
            className="w-fit rounded-xl border-8 border-solid border-red-600"
            src={props.url}
            frameborder="0"
            allow="autoplay"
            allowfullscreen
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          />
    </div>
  );
};

export default IframePlayer;
