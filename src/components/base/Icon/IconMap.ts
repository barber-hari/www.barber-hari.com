import { StaticImageData } from 'next/image';
import instargramSrc from 'public/images/icons/icon-instargram.png';
import naverSrc from 'public/images/icons/icon-naver.png';
import kakaoSrc from 'public/images/icons/icon-kakao.png';

export type IconType = 'NAVER' | 'KAKAO' | 'INSTARGRAM';

export type IconMapType = {
  [key in IconType]: StaticImageData;
};

export const IconMap: IconMapType = {
  INSTARGRAM: instargramSrc,
  NAVER: naverSrc,
  KAKAO: kakaoSrc,
};
