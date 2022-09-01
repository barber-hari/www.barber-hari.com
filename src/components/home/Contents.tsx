import React, { FC } from 'react';
import Icon from 'components/base/Icon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Path from 'models/Path';
import barberHariIcon from '../../../public/images/home/icon-barberhari.png';
import * as $ from './Contents.styled';

const Contents: FC = () => {
  const router = useRouter();
  console.log(router);

  return (
    <$.Contents>
      <$.TitleSection>
        <$.TitleImage
          src={barberHariIcon.src}
          alt="chill with homies cut and whaves"
        />
        <$.Headline>
          <$.Highlight>BARBER</$.Highlight>
          HARI
        </$.Headline>
      </$.TitleSection>
      <$.ContentSection>
        <$.Navigation>
          <$.Menu>
            <a href={Path.RESERVATION} target="_blank" rel="noreferrer">
              <Icon iconType="NAVER" width="3vh" />
              네이버 예약
            </a>
          </$.Menu>
          <$.Menu className="navi-mobile">
            <Icon iconType="KAKAO" width="3vh" />
            <Icon iconType="INSTARGRAM" width="3vh" />
            <a href="tel:010-3900-7212">
              <Icon iconType="TELL" width="3vh" />
            </a>
          </$.Menu>
          <$.Menu>
            <Link href={Path.INFO}>INFO</Link>
          </$.Menu>
          <$.Menu>
            <Link href={Path.STYLES}>STYLES</Link>
          </$.Menu>
          <$.Menu className="navi-mobile-none">
            <Icon iconType="KAKAO" width="3vh" />
            <Icon iconType="INSTARGRAM" width="3vh" />
          </$.Menu>
        </$.Navigation>
        <$.Address>
          서울 강남구 역삼로67길 33 b101호 바버하리
          <$.Tell>0507-1323-6462</$.Tell>
        </$.Address>
      </$.ContentSection>
    </$.Contents>
  );
};

export default Contents;
