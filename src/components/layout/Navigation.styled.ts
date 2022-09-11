import styled, { keyframes } from 'styled-components';

interface NavigationProps {
  isVisible: boolean;
}

export const Navigation = styled.nav`
  width: 100%;
  height: 100px;
`;

export const Logo = styled.img`
  width: 75px;
`;
const NavigationFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const Pages = styled.ul<NavigationProps>`
  z-index: 2000;
  position: fixed;
  display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
  animation: ${NavigationFade} 0.3s linear;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100px;
  background-color: #000000;
  gap: 2%;
  padding-bottom: 10px;
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
