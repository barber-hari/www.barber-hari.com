import React, { FC, useState } from 'react';
import shopImage6 from '../../public/images/info/img-shop6.png';
import shopImage5 from '../../public/images/info/img-shop5.jpg';
import shopImage2 from '../../public/images/info/img-shop2.png';
import shopImage1 from '../../public/images/info/img-shop1.png';
import shopImage7 from '../../public/images/info/img-shop7.png';
import shopImage8 from '../../public/images/info/img-shop8.png';
import * as $ from './Gallery.styled';
import ImageList from '../base/Image';

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
