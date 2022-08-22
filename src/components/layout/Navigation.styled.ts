import styled from 'styled-components';

export const Navigation = styled.nav`
  width: 100vw;
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 55px;
`;

export const Pages = styled.ul`
  display: flex;
  align-items: center;
  height: 100px;
  background-color: #000;
  gap: 1%;
`;

export const Page = styled.li`
  margin-top: 25px;
  font-size: 15px;
  color: #ffffff;

  &:first-child {
    margin-left: 9vw;
    margin-right: 30px;
  }
`;
