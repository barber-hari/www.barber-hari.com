import React, { FC, useState } from 'react';
import barberHariImage from 'public/images/info/img-hariface.png';
import barberHariImage2 from 'public/images/info/img-hariface2.jpg';
import ImageList from 'components/base/Image';
import { INFO_IMAGES } from 'models/Image';
import * as $ from './Introduce.styled';
import Icon from 'components/base/Icon';
import ReImageModal from 'components/base/modal/ReImageModal';
import SmallSlider from './SmallSlider';
import NaverMap from 'components/base/map/NaverMap';
import Reservation from 'components/base/reservation/Reservation';

const Introduce: FC = () => {
  const [show, setShow] = useState(false);
  const [targetId, setTargetId] = useState(0);

  const openModalHandler = (targetIndex: number) => {
    setShow(true);
    setTargetId(targetIndex);
  };

  const closeModalHandler = () => void setShow(false);

  return (
    <$.Container>
      <$.BoxWrapper>
        <$.LeftBox>
          <$.PictureBox>
            <$.Picture src={barberHariImage.src} alt="" className="pc" />
            <$.Picture src={barberHariImage2.src} alt="" className="mobile" />
            <$.Name>
              BARBER <br />
              HARI <br />
              <$.History>
                Lumio salon <br />
                Cobera salon <br />
                Uncle's booth barbershop <br />
                Alex-muller barbershop
              </$.History>
            </$.Name>

            <$.Address className="desktop">
              <Icon iconType="KAKAO" width="3vh" />
              barber_hari &nbsp;
              <Icon iconType="INSTARGRAM" width="3vh" />
              barber_hari
            </$.Address>
          </$.PictureBox>
          <SmallSlider />
          <$.MapBox><NaverMap /></$.MapBox>
        </$.LeftBox>
        <$.RightBox>
          <$.GalleryBox>
            <ImageList onClick={openModalHandler} INFO_IMAGES={INFO_IMAGES} />
            {show && (
              <ReImageModal
                images={INFO_IMAGES}
                targetIndex={targetId - 1}
                closeModal={closeModalHandler}
                show={show}
              />
            )}
          </$.GalleryBox>
        </$.RightBox>
        <Reservation />
      </$.BoxWrapper>
    </$.Container>
  );
};

export default Introduce;
