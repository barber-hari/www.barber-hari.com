import styled from 'styled-components';

export const Navigation = styled.nav`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
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
  isCurruntPage?: boolean;
}

export const Page = styled.li<PageProps>`
  margin-top: 10px;
  min-width: 100px;
  text-align: center;
  font-size: 25px;
  color: ${({ isCurruntPage }) => (isCurruntPage ? '#f5deb3' : '#fff')};
  cursor: pointer;
`;
