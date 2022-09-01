import image1src from '../../public/images/info/img-shop1.png';
import image2src from '../../public/images/info/img-shop2.png';
import image5src from '../../public/images/info/img-shop5.jpg';
import image6src from '../../public/images/info/img-shop6.png';
import image7src from '../../public/images/info/img-shop7.png';
import image8src from '../../public/images/info/img-shop8.png';
import style1 from '../../public/images/styles/img-stype1.jpg';
import style2 from '../../public/images/styles/img-stype2.jpg';
import style3 from '../../public/images/styles/img-stype3.jpg';
import style4 from '../../public/images/styles/img-stype4.jpg';
import style5 from '../../public/images/styles/img-stype5.jpg';
import style6 from '../../public/images/styles/img-stype6.jpg';
import style7 from '../../public/images/styles/img-stype7.jpg';
import style8 from '../../public/images/styles/img-stype8.jpg';
import style9 from '../../public/images/styles/img-stype9.jpg';
import style10 from '../../public/images/styles/img-stype10.jpg';
import style11 from '../../public/images/styles/img-stype11.jpg';
import style12 from '../../public/images/styles/img-stype12.jpg';
import style13 from '../../public/images/styles/img-stype13.jpg';
import style14 from '../../public/images/styles/img-stype14.jpg';
import style15 from '../../public/images/styles/img-stype15.jpg';
import style16 from '../../public/images/styles/img-stype16.jpg';
import style17 from '../../public/images/styles/img-stype17.jpg';
import style18 from '../../public/images/styles/img-stype18.jpg';
import style19 from '../../public/images/styles/img-stype19.jpg';
import style20 from '../../public/images/styles/img-stype20.jpg';
import style21 from '../../public/images/styles/img-stype21.jpg';
import style22 from '../../public/images/styles/img-stype22.jpg';
import style23 from '../../public/images/styles/img-stype23.jpg';
import style24 from '../../public/images/styles/img-stype24.jpg';
import style25 from '../../public/images/styles/img-stype25.jpg';
import style26 from '../../public/images/styles/img-stype26.jpg';
import style27 from '../../public/images/styles/img-stype27.jpg';
import style28 from '../../public/images/styles/img-stype28.jpg';
import style29 from '../../public/images/styles/img-stype29.jpg';
import style30 from '../../public/images/styles/img-stype30.jpg';

export default interface Image {
  src: string;
  id: number;
}

export const INFO_IMAGES: Image[] = [
  { id: 1, src: `${image6src.src}` },
  { id: 2, src: `${image5src.src}` },
  { id: 3, src: `${image2src.src}` },
  { id: 4, src: `${image1src.src}` },
  { id: 5, src: `${image7src.src}` },
  { id: 6, src: `${image8src.src}` },
];

export interface ImagePlus {
  src: string;
  id: number;
  title?: string;
  tall?: number;
}

export const STYLES_IMAGES: ImagePlus[] = [
  { id: 1, src: `${style1.src}`, tall: 3 },
  { id: 2, src: `${style2.src}`, tall: 2 },
  { id: 3, src: `${style3.src}`, tall: 3 },
  { id: 4, src: `${style4.src}`, tall: 3 },
  { id: 5, src: `${style5.src}`, tall: 2 },
  { id: 6, src: `${style6.src}`, tall: 2 },
  { id: 7, src: `${style7.src}`, tall: 3 },
  { id: 8, src: `${style8.src}`, tall: 3 },
  { id: 9, src: `${style9.src}`, tall: 3 },
  { id: 10, src: `${style10.src}`, tall: 3 },
  { id: 11, src: `${style11.src}`, tall: 2 },
  { id: 12, src: `${style12.src}`, tall: 3 },
  { id: 13, src: `${style13.src}`, tall: 3 },
  { id: 14, src: `${style14.src}`, tall: 2 },
  { id: 15, src: `${style15.src}`, tall: 2 },
  { id: 16, src: `${style16.src}`, tall: 2 },
  { id: 17, src: `${style17.src}`, tall: 3 },
  { id: 18, src: `${style18.src}`, tall: 3 },
  { id: 19, src: `${style19.src}`, tall: 3 },
  { id: 20, src: `${style20.src}`, tall: 3 },
  { id: 21, src: `${style21.src}`, tall: 2 },
  { id: 22, src: `${style22.src}`, tall: 3 },
  { id: 23, src: `${style23.src}`, tall: 2 },
  { id: 24, src: `${style24.src}`, tall: 3 },
  { id: 25, src: `${style25.src}`, tall: 3 },
  { id: 26, src: `${style26.src}`, tall: 3 },
  { id: 27, src: `${style27.src}`, tall: 3 },
  { id: 28, src: `${style28.src}`, tall: 3 },
  { id: 29, src: `${style29.src}`, tall: 3 },
  { id: 30, src: `${style30.src}`, tall: 2 },
];
