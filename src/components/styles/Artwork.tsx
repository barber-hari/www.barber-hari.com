import React, { FC } from 'react';
import { Style } from 'models/style';
import * as $ from './Artwork.styled';

export interface ArtworkProps {
  styles: Style[];
}

const Artwork: FC<ArtworkProps> = props => {
  const { styles } = props;
  console.log(styles);
  return (
    <$.Wrapper>
      <$.Container>
        <$.Masonry>
          {styles.map(({ id, images, title, content }) => (
            <$.Images key={`image-${id}`}>
              <>
                <$.ImageTitle>{title}</$.ImageTitle>
                <$.ImageTitle>{content}</$.ImageTitle>
                {images.map(image => (
                  <$.Image
                    key={`image-${id}-${image}`}
                    src={`styles/${id}/${image}`}
                  />
                ))}
              </>
            </$.Images>
          ))}
        </$.Masonry>
      </$.Container>
    </$.Wrapper>
  );
};

export default Artwork;
