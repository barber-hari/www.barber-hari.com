import React, { FC, ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';

export interface NaverMapProps {
  children?: ReactNode;
}

const NaverMap: FC<NaverMapProps> = props => {
  const { children } = props;

  const mapRef = useRef<HTMLElement | null | any>(null);

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

  return <NaverMapBox id={'map'}></NaverMapBox>;
};

const NaverMapBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export default NaverMap;
