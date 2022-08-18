import React, { FC } from 'react';
import * as $ from './Contents.styled';
import barberHariIcon from 'public/images/home/icon-barberhari.png'
import Icon from 'components/base/Icon'


const Contents: FC = () => {
  return (
    <$.Contents>
      <$.TitleSection>
        <$.TitleImage src={barberHariIcon.src} alt="chill with homies cut and whaves"/>
        <$.Headline>
          <$.Highlight>BARBER</$.Highlight>
          HARI
        </$.Headline>
      </$.TitleSection>
      <$.ContentSection>
        <$.Navigation>
          <$.Menu>
            <Icon iconType="NAVER" width="3vh"/>
            네이버 예약
          </$.Menu>
          <$.Menu>
            INFO
          </$.Menu>
          <$.Menu>
            STYLES
          </$.Menu>
          <$.Menu>
            <Icon iconType="KAKAO" width="3vh"/>
            <Icon iconType="INSTARGRAM" width="3vh"/>
          </$.Menu>
        </$.Navigation>
        <$.Address>
          서울 강남구 역삼로67길 33 b101호 바버하리
          <$.Tell>
          0507-1323-6462
          </$.Tell>
        </$.Address>
      </$.ContentSection>
    </$.Contents>
  );
};

export default Contents;
