import React, { FC } from 'react';
import Icon from 'components/base/Icon';
import Link from 'next/link';
import Path from 'models/Path';
import barberHariIcon from 'images/home/icon-barberhari.png';
import * as $ from './Contents.styled';

const Contents: FC = () => {
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
            <$.Anchor href={Path.RESERVATION} target="_blank" rel="noreferrer">
              <Icon iconType="NAVER" width="3vh" />
              네이버 예약
            </$.Anchor>
          </$.Menu>
          <$.Menu className="navi-mobile">
            <Icon iconType="KAKAO" width="3vh" />
            <Icon iconType="INSTARGRAM" width="3vh" />
            <$.Anchor href="tel:070-7728-6462">
              <Icon iconType="TEL" width="3vh" />
            </$.Anchor>
          </$.Menu>
          <$.Menu>
            <Link href={Path.INFO}>INFO</Link>
          </$.Menu>
          <$.Menu>
            <Link href={Path.STYLES}>STYLES</Link>
          </$.Menu>
          <$.Menu className="navi-mobile-none">
            <Icon iconType="KAKAO" width="3vh" />
            <$.Anchor href={Path.INSTARGRAM} target="_blank" rel="noreferrer">
              <Icon iconType="INSTARGRAM" width="3vh" />
            </$.Anchor>
          </$.Menu>
        </$.Navigation>
        <$.Address>
          서울 강남구 역삼로67길 33 b101호 바버하리
          <$.Tel>0507-1323-6462</$.Tel>
        </$.Address>
      </$.ContentSection>
    </$.Contents>
  );
};

export default Contents;
