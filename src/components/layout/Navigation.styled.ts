import styled from 'styled-components';

interface NavigationProps {
  scroll: number;
}

export const Navigation = styled.nav`
  width: 100%;
  height: 100px;
`;

export const Logo = styled.img`
  width: 75px;
`;

export const Pages = styled.ul<NavigationProps>`
  z-index: 2000;
  position: fixed;
  display: ${({ scroll }) => (scroll > 300 ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100px;
  background-color: #000000;
  gap: 2%;
`;

interface PageProps {
  isCurrentPage?: boolean;
}

export const Page = styled.li<PageProps>`
  margin-top: 10px;
  min-width: 100px;
  text-align: center;
  font-size: 25px;
  color: ${({ isCurrentPage }) => (isCurrentPage ? '#f5deb3' : '#fff')};
  cursor: pointer;
`;
