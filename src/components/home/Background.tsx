import React, { FC } from 'react';
import * as $ from './Background.styled';

const Background: FC = () => {
  return (
    <$.Background>
      <$.Video />
      <$.SideBar/>
      <$.SideBar/>
      <$.BackgroundCover/>
    </$.Background>
  );
};

export default Background;
