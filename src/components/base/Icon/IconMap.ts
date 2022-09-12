import { StaticImageData } from 'next/image';
import instargramSrc from 'images/icons/icon-instargram.png';
import naverSrc from 'images/icons/icon-naver.png';
import kakaoSrc from 'images/icons/icon-kakao.png';
import tellSrc from 'images/icons/icon-tell.png';
import leftArrowSrc from 'images/icons/arrow-left.png';
import rightArrowSrc from 'images/icons/right-arrow.png';
import naverReserveSrc from 'images/icons/icon-naver-reservation.png';

export type IconType =
  | 'NAVER'
  | 'KAKAO'
  | 'INSTARGRAM'
  | 'TELL'
  | `LARROW`
  | `RARROW`
  | `NAVERRESERVE`;

export type IconMapType = {
  [key in IconType]: StaticImageData;
};

export const IconMap: IconMapType = {
  INSTARGRAM: instargramSrc,
  NAVER: naverSrc,
  KAKAO: kakaoSrc,
  TELL: tellSrc,
  RARROW: rightArrowSrc,
  LARROW: leftArrowSrc,
  NAVERRESERVE: naverReserveSrc,
};
