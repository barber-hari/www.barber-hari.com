import React, { FC } from 'react';
import * as $ from './Gallery.styled';

export interface GalleryProps {
  openModal: () => void;
}

/**
 * deprecated
 * */
const Gallery: FC<GalleryProps> = props => {
  const { openModal } = props;

  return <$.GalleryBox />;
};

export default Gallery;
