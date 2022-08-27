import React, { FC, ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';

export interface NaverMapProps {
  children?: ReactNode;
}

const NaverMap: FC<NaverMapProps> = props => {
  const { children } = props;
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    //바버하리 좌표
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
  }, [mapRef]);

  // 새로고침시 스크립트를 불러오지못하는것같음
  // ReferenceError: naver is not defined
  return <NaverMapBox ref={mapRef}></NaverMapBox>;
};

const NaverMapBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export default NaverMap;

/* deprecated */

///////////////////

/*  useEffect(() => {
    mapRef.current = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.5035, 127.0523),
      zoomControl: true,
    });
  }, [mapRef]);*/

//////////////////

////////////////
/*
  useEffect(() => {
    let map = null;
    let marker = null;

    const initMap = () => {
      map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.5035, 127.0523),
        scaleControl: false,
        logoControl: false,
        mapDataControl: false,
        zoomControl: true,
        minZoom: 6,
      });
      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5035, 127.0523),
        map: map,
      });
    };
    initMap();
  }, []);
*/
