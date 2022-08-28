import React, { FC } from 'react';
import { IconMap, IconType } from './IconMap';
import * as $ from './Icon.styled';

interface IconProps {
  width?: string;
  height?: string;
  iconType: IconType;
  onClick?: () => void;
}

const Icon: FC<IconProps> = props => {
  const { width = '40px', height, iconType } = props;
  return (
    <$.Icon
      src={IconMap[iconType].src}
      width={width}
      height={height || width}
    />
  );
};

export default Icon;
