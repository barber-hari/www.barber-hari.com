import image1src from 'public/images/info/img-shop1.png';
import image2src from 'public/images/info/img-shop2.png';
import image3src from 'public/images/info/img-shop3.png';
import image4src from 'public/images/info/img-shop4.png';
import image5src from 'public/images/info/img-shop5.jpg';
import image6src from 'public/images/info/img-shop6.png';
import image7src from 'public/images/info/img-shop7.png';
import image8src from 'public/images/info/img-shop8.png';

export interface IImageList {
  image: string;
  id: number;
}

const Images: IImageList[] = [
  { id: 1, image: `${image6src.src}` },
  { id: 2, image: `${image5src.src}` },
  { id: 3, image: `${image2src.src}` },
  { id: 4, image: `${image1src.src}` },
  { id: 5, image: `${image7src.src}` },
  { id: 6, image: `${image8src.src}` },
];
export default Images;
