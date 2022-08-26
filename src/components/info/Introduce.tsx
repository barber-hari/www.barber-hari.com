import React, { FC, useState } from 'react';
import barberHariImage from 'public/images/info/img-hariface.png';
import ImageList from 'components/base/Image';
import { INFO_IMAGES } from 'models/Image';
import * as $ from './Introduce.styled';
import Icon from '../base/Icon';
import ReImageModal from '../base/Modal/ReImageModal';

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

            <$.Address className="desktop">
              <Icon iconType="KAKAO" width="3vh" />
              barber_hari &nbsp;
              <Icon iconType="INSTARGRAM" width="3vh" />
              barber_hari
            </$.Address>
          </$.PictureBox>
          <$.MapBox />
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
      </$.BoxWrapper>
    </$.Container>
  );
};

export default Introduce;
