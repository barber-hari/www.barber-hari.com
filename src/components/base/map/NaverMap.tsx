import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Script from 'next/script';
import Path from 'models/Path';
import Icon from 'components/base/Icon';
import * as $ from './NaverMap.styled';

const NaverMapBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  z-index: 10;
`;

const NaverMap: FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const handleLoadNaverMap = () => {
    if (!mapRef.current || !window.naver) return;
    const location = new naver.maps.LatLng(37.5035, 127.0523);
    const settings: naver.maps.MapOptions = {
      center: location,
      zoomControl: true,
      minZoom: 6,
    };
    const map = new naver.maps.Map(mapRef.current, settings);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const marker = new naver.maps.Marker({
      position: location,
      map,
    });
  };

  useEffect(() => {
    handleLoadNaverMap();
  }, [mapRef]);

  return (
    <>
      <Script
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}&callback=initMap`}
        onLoad={handleLoadNaverMap}
      />
      <NaverMapBox ref={mapRef}>
        <$.NaverMapFooter href={Path.RESERVATION} target="_blank">
          <$.Tell>
            서울 강남구 역삼로67길 33 b101호 바버하리 0507-1323-6462
          </$.Tell>
          <$.IconBox>
            <p>네이버 예약</p>
            <Icon iconType="NAVERRESERVE" width="min(8vw,50px)" />
          </$.IconBox>
        </$.NaverMapFooter>
      </NaverMapBox>
    </>
  );
};

export default NaverMap;
