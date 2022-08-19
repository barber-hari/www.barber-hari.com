import React, { FC } from 'react';
import barberHariImage from 'public/images/info/img-hariface.png';
import shopImage1 from 'public/images/info/img-shop1.png';
import shopImage2 from 'public/images/info/img-shop2.png';
import shopImage3 from 'public/images/info/img-shop3.png';
import shopImage4 from 'public/images/info/img-shop4.png';
import * as $ from './Introduce.styled';
import Icon from '../base/Icon';

const Introduce: FC = () => {
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
        <$.Address>
          <Icon iconType={'KAKAO'} width={'3vh'} />
          KAKAO ADDRESS &nbsp;
          <Icon iconType={'INSTARGRAM'} width={'3vh'} />
          INSTA ADDRESS
        </$.Address>
      </$.PictureBox>
      <$.GalleryBox>
        <$.Image src={shopImage1.src} />
        <$.Image src={shopImage2.src} />
        <$.Image src={shopImage3.src} />
        <$.Image src={shopImage4.src} />
        {/* TODO:반복문으로 만들기 */}
      </$.GalleryBox>
    </$.Container>
  );
};

export default Introduce;
