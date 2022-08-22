import React, { FC } from 'react';
import shopImage6 from '../../public/images/info/img-shop6.png';
import shopImage5 from '../../public/images/info/img-shop5.jpg';
import shopImage2 from '../../public/images/info/img-shop2.png';
import shopImage1 from '../../public/images/info/img-shop1.png';
import shopImage7 from '../../public/images/info/img-shop7.png';
import shopImage8 from '../../public/images/info/img-shop8.png';
import * as $ from './Gallery.styled';

export interface GalleryProps {}

const Gallery: FC<GalleryProps> = props => {
  const {} = props;

  return (
    <$.GalleryBox>
      <$.ImageBox>
        <$.Image src={shopImage6.src} />
      </$.ImageBox>
      <$.ImageBox>
        <$.Image src={shopImage5.src} />
      </$.ImageBox>
      <$.ImageBox>
        <$.Image src={shopImage2.src} />
      </$.ImageBox>
      <$.ImageBox>
        <$.Image src={shopImage1.src} />
      </$.ImageBox>
      <$.ImageBox>
        <$.Image src={shopImage7.src} />
      </$.ImageBox>
      <$.ImageBox>
        <$.Image src={shopImage8.src} />
      </$.ImageBox>
    </$.GalleryBox>
  );
};

export default Gallery;
