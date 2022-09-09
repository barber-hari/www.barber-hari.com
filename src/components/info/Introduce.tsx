import React, { FC } from 'react';
import ImageList from 'components/base/Image';
import Icon from 'components/base/Icon';
import NaverMap from 'components/base/map/NaverMap';
import Path from 'models/Path';
import profileImageMobile from 'images/info/img-hariface2.jpg';
import profileImagePc from 'images/info/img-hariface.png';
import SmallSlider from 'components/info/SmallSlider';
import { INFO_IMAGES } from 'models/Image';
import { ModalState } from 'store/ModalState';
import { useSetRecoilState } from 'recoil';
import * as $ from './Introduce.styled';

const Introduce: FC = () => {
  const setModalState = useSetRecoilState(ModalState);

  const openModalHandler = (id: number) => {
    void setModalState(state => ({
      ...state,
      isVisible: true,
      targetId: id,
      modalImages: INFO_IMAGES,
    }));
  };

  return (
    <$.Container>
      <$.BoxWrapper>
        <$.LeftBox>
          <$.PictureBox>
            <$.Picture src={profileImagePc.src} alt="" className="pc" />
            <$.Picture src={profileImageMobile.src} alt="" className="mobile" />
            <$.MobilePicture>
              <$.Picture src={profileImageMobile.src} alt="" />
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
          <SmallSlider onClick={openModalHandler} />
          <$.MapBox>
            <NaverMap>
              <$.NaverMapFooter href={Path.RESERVATION} target="_blank">
                <$.Tell>
                  서울 강남구 역삼로67길 33 b101호 바버하리 0507-1323-6462
                </$.Tell>
                <$.IconBox>
                  <p>네이버 예약</p>
                  <Icon iconType="NAVERRESERVE" width="min(8vw,50px)" />
                </$.IconBox>
              </$.NaverMapFooter>
            </NaverMap>
          </$.MapBox>
        </$.LeftBox>
        <$.RightBox>
          <$.GalleryBox>
            <ImageList onClick={openModalHandler} />
          </$.GalleryBox>
        </$.RightBox>
      </$.BoxWrapper>
    </$.Container>
  );
};

export default Introduce;
