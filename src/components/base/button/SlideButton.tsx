import React, { FC, ReactNode } from 'react';
import * as $ from './SlideButton.styled';

export interface SlideButtonProps {
  direction: string;
  onClick: () => void;
  children: ReactNode;
}

const SlideButton: FC<SlideButtonProps> = props => {
  const { direction, onClick, children } = props;
  return (
    <$.SlideButton direction={direction} onClick={onClick}>
      {children}
    </$.SlideButton>
  );
};

export default SlideButton;
