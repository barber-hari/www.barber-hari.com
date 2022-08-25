import React, { FC, useState } from 'react';
import barberHariImage from 'public/images/info/img-hariface.png';
import ImageList from 'components/base/Image';
import Image, { INFO_IMAGES } from 'models/Image';
import * as $ from './Introduce.styled';
import Icon from '../base/Icon';
import ImageModal from '../base/Modal/ImageModal';

const Introduce: FC = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState<Image>(INFO_IMAGES[0]);

  const openModalHandler = (targetId: number) => {
    setCurrentImage(INFO_IMAGES.find(({ id }) => id === targetId) as Image);
    setShow(true);
  };

  const clickImageChangeHandler = (targetId: number) => {
    setCurrentImage(
      INFO_IMAGES.find(({ id }) =>
        targetId !== INFO_IMAGES.length
          ? id === targetId + 1
          : id === INFO_IMAGES[0].id
      ) as Image
    );
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
              <ImageModal
                closeModal={closeModalHandler}
                show={show}
                currentImage={currentImage}
                clickImageChangeHandler={clickImageChangeHandler}
              />
            )}
          </$.GalleryBox>
        </$.RightBox>
      </$.BoxWrapper>
    </$.Container>
  );
};

export default Introduce;
