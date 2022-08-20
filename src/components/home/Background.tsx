import React, { FC, useState } from 'react';
import sidebarImage from 'public/images/home/img-sidebar.jpg';
import * as $ from './Background.styled';
import videoSrc from 'public/videos/test-video.mp4';

const Background: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onPlayingHandler = () => {
    setIsLoaded(true);
  };

  return (
    <$.Background>
      <$.Video
        controls={false}
        loop
        muted
        preload="auto"
        autoPlay
        src={videoSrc}
        onPlaying={onPlayingHandler}
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
