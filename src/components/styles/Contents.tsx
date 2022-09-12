import React, { FC } from 'react';
import { HairStyle } from 'models/HairStyle';
import Masonry from 'components/styles/Masonry';
import * as $ from './Contents.styled';

export interface ArtworkProps {
  styles: HairStyle[];
}

const Contents: FC<ArtworkProps> = props => {
  const { styles } = props;
  return (
    <$.Wrapper>
      <$.Container>
        <Masonry styles={styles} width="400px" height="500px" />
      </$.Container>
    </$.Wrapper>
  );
};

export default Contents;
