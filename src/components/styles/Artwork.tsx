import React, { FC } from 'react';
import { useRouter } from 'next/router';
import * as $ from './Artwork.styled';
import { ImagePlus, STYLES_IMAGES } from '../../models/Image';

export interface ArtworkProps {}

const Artwork: FC<ArtworkProps> = () => {
  const router = useRouter();
  const onClick = ({ id, src }: ImagePlus) => {
    router.push(
      {
        pathname: `/styles/detail/${id}`,
        query: {
          id,
          src,
        },
      },
      `/styles/detail/${id}`
    );
  };
  return (
    <$.Wrapper>
      <$.Container>
        <$.Masonry>
          {STYLES_IMAGES.map(({ src, id, tall }) =>
            tall === 2 ? (
              <$.Item
                key={`styles-image-${id}`}
                src={src}
                className="is-double"
              />
            ) : (
              <$.Item
                key={`styles-image-${id}`}
                src={src}
                className="is-triple"
              />
            )
          )}
        </$.Masonry>
      </$.Container>
    </$.Wrapper>
  );
};

export default Artwork;
