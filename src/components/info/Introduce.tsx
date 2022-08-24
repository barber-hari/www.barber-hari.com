import React, { FC, useState } from 'react';
import barberHariImage from 'public/images/info/img-hariface.png';
import * as $ from './Introduce.styled';
import Icon from '../base/Icon';
import ImageModal from '../base/Modal/ImageModal';
import ImageList from 'components/base/Image'
import Image, { INFO_IMAGES } from 'models/Image';

const Introduce: FC = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState<Image>(INFO_IMAGES[0]);

  const openModalHandler = (targetId: number) => {
    setCurrentImage(INFO_IMAGES.find(({ id }) => id === targetId)!);
    setShow(true);
  }

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
            <ImageList
              onClick={openModalHandler}
              images={INFO_IMAGES}
            />
            {show && (
              <ImageModal
                closeModal={closeModalHandler}
                show={show}
                currentImage={currentImage}
              />
            )}
          </$.GalleryBox>
        </$.RightBox>
      </$.BoxWrapper>
    </$.Container>
  );
};

export default Introduce;
