import { atom } from 'recoil';

interface UIStateProps {
  isVisible: boolean;
}

export const UIState = atom<UIStateProps>({
  key: 'UIState',
  default: {
    isVisible: false,
  },
});
