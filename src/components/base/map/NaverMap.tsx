import React, { FC, ReactNode, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Script from 'next/script';

function a() {
  let index = 1;
  return () => {
    console.log(index++)
  }
}

const NaverMapBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export interface NaverMapProps {
  children?: ReactNode;
}

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
    const marker = new naver.maps.Marker({
      position: location,
      map: map,
    });
  }

  useEffect(() => {
    handleLoadNaverMap();
  }, [mapRef])

  return (
    <>
      <Script
        type={'text/javascript'}
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}&callback=initMap`}
        onLoad={handleLoadNaverMap}
      />
    <NaverMapBox ref={mapRef}></NaverMapBox>
  </>
  );
};


export default NaverMap;