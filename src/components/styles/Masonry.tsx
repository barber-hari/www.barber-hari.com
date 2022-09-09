import React, { FC } from 'react';
import Image from 'next/image';
import { Style } from 'models/Style';
import Path from 'models/Path';
import * as $ from './Masonry.styled';

export interface MasonryProps {
  styles: Style[];
  width: string;
  height: string;
}

const Masonry: FC<MasonryProps> = props => {
  const { styles, width, height } = props;
  return (
    <$.Masonry width={width} height={height}>
      {styles.map(({ id, thumb, title }) => (
        <$.Images key={`image-${id}`}>
          <$.ImageAnchor href={`${Path.STYLES}/${id}`}>
            <$.ImageStyled>
              <Image
                data-id={id}
                key={`image-${id}-${thumb}`}
                src={`/styles/${id}/${thumb}`}
                loading="lazy"
                layout="fill"
                alt={title}
              />
            </$.ImageStyled>
            <$.ImageTitle>{title}</$.ImageTitle>
          </$.ImageAnchor>
        </$.Images>
      ))}
    </$.Masonry>
  );
};

export default Masonry;
