import React, { FC, useRef, useState } from 'react';
import { HairStyle } from 'models/HairStyle';
import Masonry from 'components/styles/Masonry';
import useScroll from 'hooks/useScroll';
import * as $ from './Detail.styled';

export interface DetailProps {
  styles: HairStyle[];
  style: HairStyle;
}

const Detail: FC<DetailProps> = props => {
  const {
    styles,
    style: { id, title, description, images },
  } = props;

  const [isVisibleHairInfo, setIsVisibleHairInfo] = useState(true);
  const imageRef = useRef<HTMLUListElement>(null);

  const handleScroll = (scrollHeight: number) => {
    const { clientHeight } = imageRef.current as HTMLUListElement;
    setIsVisibleHairInfo(clientHeight - 100 > scrollHeight);
  };

  const { scrollHeight } = useScroll(handleScroll);

  return (
    <$.Container>
      <$.SideBar>
        <$.HairInfo isVisible={isVisibleHairInfo} scrollHeight={scrollHeight}>
          <$.HairTitle>{title}</$.HairTitle>
          <$.HairDescription>{description}</$.HairDescription>
        </$.HairInfo>
      </$.SideBar>
      <$.ImageContainer>
        <$.Images ref={imageRef}>
          {images.map(image => (
            <$.Image key={`images-${image}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/styles/${id}/${image}`}
                key={`image-${image}`}
                alt={title}
              />
            </$.Image>
          ))}
        </$.Images>
        <$.Line>Other Styles</$.Line>
        <Masonry styles={styles} width="300px" height="400px" />
      </$.ImageContainer>
    </$.Container>
  );
};

export default Detail;
