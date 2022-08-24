import image1src from 'public/images/info/img-shop1.png';
import image2src from 'public/images/info/img-shop2.png';
import image3src from 'public/images/info/img-shop3.png';
import image4src from 'public/images/info/img-shop4.png';
import image5src from 'public/images/info/img-shop5.jpg';
import image6src from 'public/images/info/img-shop6.png';
import image7src from 'public/images/info/img-shop7.png';
import image8src from 'public/images/info/img-shop8.png';

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