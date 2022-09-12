import React, { FC } from 'react';
import GalleryImage from 'components/info/GalleryImage';
import Icon from 'components/base/Icon';
import NaverMap from 'components/base/map/NaverMap';
import Path from 'models/Path';
import profileImageMobile from 'images/info/img-hariface2.jpg';
import profileImagePc from 'images/info/img-hariface.png';
import Slider from 'components/info/Slider';
import { INFO_IMAGES } from 'models/Image';
import { ModalState } from 'store/UIStore';
import { useSetRecoilState } from 'recoil';
import * as $ from './Contents.styled';

const Contents: FC = () => {
  const setModalState = useSetRecoilState(ModalState);

  const openModalHandler = (id: number) => {
    void setModalState(state => ({
      ...state,
      targetId: id,
      isVisible: true,
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
              <$.Anchor href={Path.INSTARGRAM} target="_blank" rel="noreferrer">
                <Icon iconType="INSTARGRAM" />
                barber_hari
              </$.Anchor>
            </$.Address>
          </$.PictureBox>
          <Slider onClick={openModalHandler} />
          <$.MapBox>
            <NaverMap />
          </$.MapBox>
        </$.LeftBox>
        <$.RightBox>
          <$.GalleryBox>
            <GalleryImage onClick={openModalHandler} />
          </$.GalleryBox>
        </$.RightBox>
      </$.BoxWrapper>
    </$.Container>
  );
};

export default Contents;
