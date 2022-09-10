import React, { FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import { IStyle } from 'models/IStyle';
import Masonry from 'components/styles/Masonry';
import { useRecoilState } from 'recoil';
import * as $ from './Detail.styled';
import { useScroll } from '../../hooks/useScroll';
import { UIState } from '../../store/UIState';

export interface DetailProps {
  styles: IStyle[];
  style: IStyle;
}

const Detail: FC<DetailProps> = props => {
  const {
    styles,
    style: { id, title, description, images },
  } = props;
  const { scrollHeight } = useScroll();
  const [{ isVisible }, setUIState] = useRecoilState(UIState);
  const imageRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const { clientHeight } = imageRef.current as HTMLUListElement;
    clientHeight - 100 > scrollHeight
      ? setUIState(state => ({ ...state, isVisible: true }))
      : setUIState(state => ({ ...state, isVisible: false }));
  }, [scrollHeight, setUIState]);

  return (
    <$.Container>
      <$.SideBar>
        <$.HairInfo isVisible={isVisible}>
          <$.HairTitle>{title}</$.HairTitle>
          <$.HairDescription>{description}</$.HairDescription>
        </$.HairInfo>
      </$.SideBar>
      <$.ImageContainer>
        <$.Images ref={imageRef}>
          {images.map(image => (
            <$.Image key={`images-${image}`}>
              <Image
                src={`/styles/${id}/${image}`}
                key={`image-${image}`}
                layout="fill"
                alt={title}
              />
            </$.Image>
          ))}
        </$.Images>
        <div>Other Styles</div>
        <Masonry styles={styles} width="300px" height="400px" />
      </$.ImageContainer>
    </$.Container>
  );
};

export default Detail;
