import React, { FC } from 'react';
import * as $ from './Background.styled';
import sidebarImage from 'public/images/home/img-sidebar.jpg';
import backgroundVideo from 'public/videos/video-test.mp4';

const Background: FC = () => {
  return (
    <$.Background>
      <$.Video loop autoPlay muted>
        <source src="" />
      </$.Video>
      <$.SideBarLeft src={sidebarImage.src} alt="salon" />
      <$.SideBarRight src={sidebarImage.src} alt="salon" />
      <$.BackgroundCover />
    </$.Background>
  );
};

export default Background;
