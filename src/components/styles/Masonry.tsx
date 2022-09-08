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
        <$.Images key={`image-${id}`} height={height}>
          <a href={`${Path.STYLES}/${id}`}>
            <div>
              <Image
                data-id={id}
                key={`image-${id}-${thumb}`}
                src={`/styles/${id}/${thumb}`}
                loading="lazy"
                layout="fill"
                alt={title}
              />
            </div>
            <h4>{title}</h4>
          </a>
        </$.Images>
      ))}
    </$.Masonry>
  );
};

export default Masonry;
