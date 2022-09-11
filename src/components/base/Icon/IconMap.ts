import { StaticImageData } from 'next/image';
import instargramSrc from '../../../../public/images/icons/icon-instargram.png';
import naverSrc from '../../../../public/images/icons/icon-naver.png';
import kakaoSrc from '../../../../public/images/icons/icon-kakao.png';
import tellSrc from '../../../../public/images/icons/icon-tell.png';
import leftArrowSrc from '../../../../public/images/icons/arrow-left.png';
import rightArrowSrc from '../../../../public/images/icons/right-arrow.png';
import naverReserveSrc from '../../../../public/images/icons/icon-naver-reservation.png';

// 리터럴타입
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
