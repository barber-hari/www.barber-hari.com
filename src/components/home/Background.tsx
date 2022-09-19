import React, { FC, useState } from 'react';
import sidebarImage from 'images/home/img-sidebar.jpg';
import videoSrc from 'videos/barberhari.mp4';
import * as $ from './Background.styled';

const Background: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOnPlay = () => {
    setIsLoaded(true);
  };

  return (
    <$.Background>
      <$.Video
        controls={false}
        playsInline
        loop
        muted
        preload="auto"
        autoPlay
        src={videoSrc}
        onPlaying={handleOnPlay}
      />
      <$.SideBar
        src={sidebarImage.src}
        alt=""
        position="left"
        isLoaded={isLoaded}
      />
      <$.SideBar
        src={sidebarImage.src}
        alt=""
        position="right"
        isLoaded={isLoaded}
      />
      <$.BackgroundCover isLoaded={isLoaded} />
    </$.Background>
  );
};

export default Background;
