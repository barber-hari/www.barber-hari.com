import styled, { css } from 'styled-components';
import Path from '../../models/Path';

export const Navigation = styled.nav`
  width: 100vw;
`;

export const Logo = styled.img`
  width: 75px;
`;

export const Pages = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #000;
  gap: 2%;
`;

interface PageProps {
  pathname?: string;
}

export const Page = styled.li<PageProps>`
  margin-top: 10px;
  font-size: 25px;
  color: #fff;
  cursor: pointer;

  ${({ pathname, id }) =>
    pathname === id &&
    css`
      color: #ffd4a3;
    `}
`;
