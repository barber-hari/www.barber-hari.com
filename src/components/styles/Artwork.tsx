import React, { FC } from 'react';
import { Style } from 'models/Style';
import Image from 'next/image';
import Link from 'next/link';
import * as $ from './Artwork.styled';
import Path from 'models/Path';

export interface ArtworkProps {
  styles: Style[];
}

const Artwork: FC<ArtworkProps> = props => {
  const { styles } = props;
  return (
    <$.Wrapper>
      <$.Container>
        <$.Masonry>
          {styles.map(({ id, thumb, title }) => (
            <$.Images key={`image-${id}`}>
              <Link href={`${Path.STYLES}/${id}`}>
                <a>
                  <Image
                    data-id={id}
                    key={`image-${id}-${thumb}`}
                    src={`/styles/${id}/${thumb}`}
                    loading="lazy"
                    layout="fill"
                    alt={title}
                  />
                  {title}
                </a>
              </Link>

            </$.Images>
          ))}
        </$.Masonry>
      </$.Container>
    </$.Wrapper>
  );
};

export default Artwork;
