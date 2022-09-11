import React, { FC } from 'react';
import { IStyle } from 'models/IStyle';
import Path from 'models/Path';
import * as $ from './Masonry.styled';

export interface MasonryProps {
  styles: IStyle[];
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
              <$.Image
                data-id={id}
                key={`image-${id}-${thumb}`}
                src={`/styles/${id}/${thumb}`}
                loading="lazy"
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
