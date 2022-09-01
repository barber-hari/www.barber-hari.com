import React, { FC, useState } from 'react';
import barberHariImage from 'public/images/info/img-hariface.png';
import barberHariImage2 from 'public/images/info/img-hariface2.jpg';
import ImageList from 'components/base/Image';
import { INFO_IMAGES } from 'models/Image';
import Icon from 'components/base/Icon';
import NaverMap from 'components/base/map/NaverMap';
import Path from 'models/Path';
import ModalSlider from './ModalSlider';
import SmallSlider from './SmallSlider';
import * as $ from './Introduce.styled';

const Introduce: FC = () => {
  const [show, setShow] = useState(false);
  const [targetId, setTargetId] = useState(0);

  const openModalHandler = (targetIndex: number) => {
    setTargetId(targetIndex);
    setShow(true);
  };

  const closeModalHandler = () => void setShow(false);

  return (
    <$.Container>
      <$.BoxWrapper>
        <$.LeftBox>
          <$.PictureBox>
            <$.Picture src={barberHariImage.src} alt="" className="pc" />
            <$.Picture src={barberHariImage2.src} alt="" className="mobile" />
            <$.MobilePicture>
              <$.Picture src={barberHariImage2.src} alt="" />
              <$.Name>
                BARBER <br />
                HARI <br />
              </$.Name>
            </$.MobilePicture>
            <$.Info>
              <$.Name>
                BARBER <br />
                HARI <br />
              </$.Name>
              <$.Careers>
                <$.CareerTitle>History</$.CareerTitle>
                <$.Career>Lumio salon</$.Career>
                <$.Career>Cobera salon</$.Career>
                <$.Career>Uncle's booth barbershop</$.Career>
                <$.Career>Alex-muller barbershop</$.Career>
              </$.Careers>
            </$.Info>
            <$.Address className="desktop">
              <a href={Path.INSTARGRAM} target="_blank" rel="noreferrer">
                <Icon iconType="INSTARGRAM" />
                barber_hari
              </a>
            </$.Address>
          </$.PictureBox>
          <SmallSlider />
          <$.MapBox>
            <NaverMap />
            <$.NaverMapFooter href={Path.RESERVATION} target="_blank">
              <$.Tell>
                서울 강남구 역삼로67길 33 b101호 바버하리 0507-1323-6462
              </$.Tell>
              <$.IconBox>
                <p>네이버 예약</p>
                <Icon iconType="NAVERRESERVE" width="50px" />
              </$.IconBox>
            </$.NaverMapFooter>
          </$.MapBox>
        </$.LeftBox>
        <$.RightBox>
          <$.GalleryBox>
            <ImageList onClick={openModalHandler} INFO_IMAGES={INFO_IMAGES} />
          </$.GalleryBox>
        </$.RightBox>
        {show && (
          <ModalSlider
            INFO_IMAGES={INFO_IMAGES}
            closeModal={closeModalHandler}
            show={show}
            targetId={targetId - 1}
          />
        )}
      </$.BoxWrapper>
    </$.Container>
  );
};

export default Introduce;

/// deprecated

/* <ReImageModal
             images={INFO_IMAGES}
             targetIndex={targetId - 1}
             closeModal={closeModalHandler}
             show={show}
           /> */
