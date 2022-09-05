import React, { FC, useRef } from 'react';
import Image from 'next/image';
import { Style } from 'models/Style';
import Masonry from 'components/styles/Masonry';
import * as $ from './Detail.styled';

export interface DetailProps {
  styles: Style[];
  style: Style;
}

const Detail: FC<DetailProps> = props => {
  const {
    styles,
    style: { id, title, description, images },
  } = props;

  const lineRef = useRef(null);

  return (
    <$.Container>
      <$.SideBar>
        <$.HairInfo>
          <$.HairTitle>{title}</$.HairTitle>
          <$.HairDescription>{description}</$.HairDescription>
        </$.HairInfo>
      </$.SideBar>
      <$.Contents>
        <$.Images>
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
        <div ref={lineRef}>Other Styles</div>
        <Masonry styles={styles} width="300px" height="400px" />
      </$.Contents>
    </$.Container>
  );
};

export default Detail;
