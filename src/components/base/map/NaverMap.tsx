import React, { FC, ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Script from 'next/script';

interface NaverMapProps {
  children: ReactNode;
}

const NaverMapBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  z-index: 10;
`;

const NaverMap: FC<NaverMapProps> = props => {
  const { children } = props;
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
      <NaverMapBox ref={mapRef}>{children}</NaverMapBox>
    </>
  );
};

export default NaverMap;
