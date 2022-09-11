import { atom } from 'recoil';
import Image from 'models/Image';

interface UIVisibleState {
  isVisible: boolean;
}

interface ModalStateProps extends UIVisibleState {
  targetId: number;
  modalImages: Image[];
}

export const ModalState = atom<ModalStateProps>({
  key: 'ModalState',
  default: {
    isVisible: false,
    targetId: 0,
    modalImages: [],
  },
});
