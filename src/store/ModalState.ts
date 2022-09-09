import { atom } from 'recoil';
import Image from 'models/Image';

interface UIStateProps {
  isVisible: boolean;
  targetId: number;
  modalImages: Image[];
}

export const ModalState = atom<UIStateProps>({
  key: 'ModalState',
  default: {
    isVisible: false,
    targetId: 0,
    modalImages: [],
  },
});
