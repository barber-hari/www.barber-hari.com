import React, { FC, ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';
import { SiNaver } from 'react-icons/si';
import Path from '../../../models/Path';
import { useRouter } from 'next/router';

export interface ReservationProps {
  children?: ReactNode;
}

const Reservation: FC<ReservationProps> = props => {
  const [click, setClick] = useState(false);
  const router = useRouter();
  const { children } = props;

  const handleLinkClick = () => router.push(Path.RESERVATION);
  const handleActiveToggle = () => {
    setClick(!click);
  };

  return (
    <Container click={click}>
      <NaverIcon onClick={handleActiveToggle} click={click} />
      <p onClick={handleLinkClick}>네이버 예약</p>
    </Container>
  );
};

interface ContainerProps {
  click: boolean;
}

const Container = styled.button<ContainerProps>`
  z-index: 10000;
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 50px;
  height: 50px;
  background-color: #fff;
  transition: 1s;
  border-radius: 50px;

  & p {
    display: none;
  }

  ${({ click }) =>
    click &&
    css`
      width: 200px;
      background-color: #000;

      & p {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-70%);
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        font-family: 'Noto Sans KR', sans-serif;
      }
    `}
`;

const NaverIcon = styled(SiNaver)<ContainerProps>`
  float: right;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  ${({ click }) =>
    click &&
    css`
      color: #fff;
    `}
`;
export default Reservation;
