import React, { FC } from 'react';
import { Style } from 'models/Style';
import Masonry from 'components/styles/Masonry';
import * as $ from './Styles.styled';

export interface ArtworkProps {
  styles: Style[];
}

const Styles: FC<ArtworkProps> = props => {
  const { styles } = props;
  return (
    <$.Wrapper>
      <$.Container>
        <Masonry styles={styles} width="400px" height="500px" />
      </$.Container>
    </$.Wrapper>
  );
};

export default Styles;
