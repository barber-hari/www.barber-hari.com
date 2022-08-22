import React, { FC, useState } from 'react';
import barberHariImage from 'public/images/info/img-hariface.png';
import * as $ from './Introduce.styled';
import Icon from '../base/Icon';
import ImageModal from '../base/Modal/ImageModal';
import ImageList from '../base/Image';

const Introduce: FC = () => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

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
          <$.MapBox></$.MapBox>
        </$.LeftBox>
        <$.RightBox>
          <$.GalleryBox>
            <ImageList openModal={openModal} />
            {show ? <ImageModal closeModal={closeModal} /> : null}
          </$.GalleryBox>
        </$.RightBox>
      </$.BoxWrapper>
    </$.Container>
  );
};

export default Introduce;
