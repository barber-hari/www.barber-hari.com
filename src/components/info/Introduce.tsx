import React, { FC } from 'react';
import barberHariImage from 'public/images/info/img-hariface.png';
import shopImage1 from 'public/images/info/img-shop1.png';
import shopImage2 from 'public/images/info/img-shop2.png';
import shopImage3 from 'public/images/info/img-shop3.png';
import shopImage4 from 'public/images/info/img-shop4.png';
import shopImage5 from 'public/images/info/img-shop5.jpg';
import shopImage6 from 'public/images/info/img-shop6.png';
import shopImage7 from 'public/images/info/img-shop7.png';
import shopImage8 from 'public/images/info/img-shop8.png';
import * as $ from './Introduce.styled';
import Icon from '../base/Icon';
import { useRecoilValue } from 'recoil';
import ImageState from '../../store/imageState';

const Introduce: FC = () => {
  const imageState = useRecoilValue(ImageState);
  return (
    <$.Container>
      <$.PictureBox>
        <$.Picture src={barberHariImage.src} alt="" />
        <$.Name>
          BARBER <br />
          HARI
        </$.Name>
        <$.History>
          History <br /> <br />
          Lumio salon <br />
          Cobera salon <br />
          Uncle's booth barbershop <br />
          Alex-muller barbershop
        </$.History>
        <$.Address className={'desktop'}>
          <Icon iconType={'KAKAO'} width={'3vh'} />
          KAKAO ADDRESS &nbsp;
          <Icon iconType={'INSTARGRAM'} width={'3vh'} />
          INSTA ADDRESS
        </$.Address>
        <$.Address className={'mobile'}>
          <Icon iconType={'KAKAO'} width={'3vh'} />
          KAKAO ADDRESS &nbsp;
          <Icon iconType={'INSTARGRAM'} width={'3vh'} />
          INSTA ADDRESS
          <Icon iconType={'TELL'} width={'3vh'} />
        </$.Address>
      </$.PictureBox>
      <$.GalleryBox>
        <$.Image src={shopImage1.src} />
        <$.Image src={shopImage2.src} />
        <$.Image src={shopImage3.src} />
        <$.Image src={shopImage4.src} />
        <$.Image src={shopImage5.src} />
        <$.Image src={shopImage6.src} />
        <$.Image src={shopImage7.src} />
        <$.Image src={shopImage8.src} />
        {/* TODO:반복문으로 만들기 */}
      </$.GalleryBox>
    </$.Container>
  );
};

export default Introduce;
