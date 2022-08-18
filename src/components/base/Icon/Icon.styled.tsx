import styled from 'styled-components';

export interface IconStyledProps {
  width: string;
  height: string;
  src: string;
}

export const Icon = styled.i<IconStyledProps>`
  display: block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-image: url('${({ src }) => src}');
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
`;
