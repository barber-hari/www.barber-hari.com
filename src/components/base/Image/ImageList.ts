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
}

const Images: IImageList[] = [
  { image: `${image6src.src}` },
  { image: `${image5src.src}` },
  { image: `${image2src.src}` },
  { image: `${image1src.src}` },
  { image: `${image7src.src}` },
  { image: `${image8src.src}` },
];
export default Images;
