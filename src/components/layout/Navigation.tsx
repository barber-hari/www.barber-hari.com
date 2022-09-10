import Link from 'next/link';
import React, { FC, useRef } from 'react';
import { useRouter } from 'next/router';
import Path from 'models/Path';
import barberHariIcon from 'images/home/icon-barberhari.png';
import { useScroll } from 'hooks/useScroll';
import { useRecoilState } from 'recoil';
import useTouch, { TouchHandler } from 'hooks/useTouch';
import { UIState } from 'store/UIState';
import * as $ from './Navigation.styled';

const Navigation: FC = () => {
  const { pathname } = useRouter();
  const { scrollHeight } = useScroll();
  const [{ isVisible }, setUIState] = useRecoilState(UIState);
  const navigationRef = useRef<HTMLElement>(null);

  const onWheelHandler: TouchHandler = ({ deltaY }) => {
    if (deltaY > 0) {
      if (!isVisible) {
        navigationRef.current?.scrollTo(0, 0);
        setUIState(state => ({ ...state, isVisible: true }));
      }
    } else {
      navigationRef.current?.scrollTop === 0 &&
        setUIState(state => ({ ...state, isVisible: false }));
    }
  };

  const { onTouchStartHandler, onTouchEndHandler } = useTouch(onWheelHandler);

  return (
    <$.Navigation
      ref={navigationRef}
      onWheel={onWheelHandler}
      onTouchStart={onTouchStartHandler}
      onTouchEnd={onTouchEndHandler}
    >
      <$.Pages scroll={scrollHeight}>
        <$.Page isCurrentPage={pathname === Path.INFO}>
          <Link href={Path.INFO}>INFO</Link>
        </$.Page>
        <$.Page>
          <Link href={Path.INDEX}>
            <$.Logo
              src={barberHariIcon.src}
              alt="chill with homies cut and whaves"
            />
          </Link>
        </$.Page>
        <$.Page isCurrentPage={pathname === Path.STYLES}>
          <Link href={Path.STYLES}>STYLES</Link>
        </$.Page>
      </$.Pages>
    </$.Navigation>
  );
};

export default Navigation;
