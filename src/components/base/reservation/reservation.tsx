import React, { FC, ReactNode } from 'react';

export interface ReservationProps {
  children?: ReactNode;
}

const Reservation: FC<ReservationProps> = props => {
  const { children } = props;
  return <div></div>;
};

export default Reservation;
