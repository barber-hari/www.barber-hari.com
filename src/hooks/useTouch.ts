import { TouchEventHandler, useRef } from 'react';

export interface TouchHandler {
  ({ deltaY }: { deltaY: number }): void;
}

const useTouch = (touchHandler: TouchHandler) => {
  const startY = useRef(0);

  const onTouchStartHandler: TouchEventHandler = event => {
    startY.current = event.touches[0].pageY;
  };

  const onTouchEndHandler: TouchEventHandler = event => {
    touchHandler({
      deltaY: startY.current > event.changedTouches[0].pageY ? 1 : -1,
    });
  };
  return {
    onTouchStartHandler,
    onTouchEndHandler,
  };
};

export default useTouch;
