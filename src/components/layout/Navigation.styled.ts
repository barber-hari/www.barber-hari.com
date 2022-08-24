import styled from 'styled-components';

export const Navigation = styled.nav`
  width: 100vw;
  @media (max-width: 1023px) {
    display: none;
  }
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

export const Page = styled.li`
  margin-top: 10px;
  font-size: 15px;
  color: #ffffff;

  &:first-child {
  }
`;
