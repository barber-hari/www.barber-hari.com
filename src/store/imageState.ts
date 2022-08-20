import { atom } from 'recoil';

interface IImageState {
  [key: string]: string[];
}

const imageState = atom<IImageState>({
  key: 'shopImage',
  default: {},
});
export default imageState;
