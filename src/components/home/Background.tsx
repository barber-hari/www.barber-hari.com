import React, { FC } from 'react';
import sidebarImage from 'public/images/home/img-sidebar.jpg';
import * as $ from './Background.styled';

const Background: FC = () => {
  return (
    <$.Background>
      <$.Video controls loop autoPlay muted preload="auto">
        <source src="/videos/test-video.mp4" type="video/mp4" />
      </$.Video>
      <$.SideBarLeft src={sidebarImage.src} alt="salon" />
      <$.SideBarRight src={sidebarImage.src} alt="salon" />
      <$.BackgroundCover />
    </$.Background>
  );
};

export default Background;
