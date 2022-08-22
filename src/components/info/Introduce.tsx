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
import Gallery from './Gallery';

const Introduce: FC = () => {
  const imageState = useRecoilValue(ImageState);
  return (
    <$.Container>
      <$.BoxWrapper>
        <$.LeftBox>
          <$.PictureBox>
            <$.Picture src={barberHariImage.src} alt="" />
            <$.Name>
              BARBER <br />
              HARI <br /> <br />
              <$.History>
                History <br /> <br />
                Lumio salon <br />
                Cobera salon <br />
                Uncle's booth barbershop <br />
                Alex-muller barbershop
              </$.History>
            </$.Name>

            <$.Address className={'desktop'}>
              <Icon iconType={'KAKAO'} width={'3vh'} />
              barber_hari &nbsp;
              <Icon iconType={'INSTARGRAM'} width={'3vh'} />
              barber_hari
            </$.Address>
          </$.PictureBox>
          <$.MapBox>
            <div color={'black'}>네이버맵 넣기</div>
          </$.MapBox>
        </$.LeftBox>
        <$.RightBox>
          <Gallery />
        </$.RightBox>
      </$.BoxWrapper>
      {/* TODO:반복문으로 만들기 */}
    </$.Container>
  );
};

export default Introduce;
