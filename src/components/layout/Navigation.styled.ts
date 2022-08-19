import styled from 'styled-components';

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 10;
`;

export const Pages = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  gap: 40px;
  background-color: #000;
`;
export const Page = styled.li`
  display: flex;
  font-size: 25px;
  left: 8%;
  color: #ffffff;
`;

export const Anchor = styled.a``;
