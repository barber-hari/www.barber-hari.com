import image1src from 'images/info/DSC03746.jpg';
import image2src from 'images/info/DSC03736.jpg';
import image3src from 'images/info/DSC03687.jpg';
import image4src from 'images/info/DSC03756.jpg';
import image5src from 'images/info/DSC03757.jpg';
import image6src from 'images/info/DSC03763.jpg';

export default interface Image {
  src: string;
  id: number;
}

export const INFO_IMAGES: Image[] = [
  { id: 1, src: `${image1src.src}` },
  { id: 2, src: `${image2src.src}` },
  { id: 3, src: `${image3src.src}` },
  { id: 4, src: `${image4src.src}` },
  { id: 5, src: `${image5src.src}` },
  { id: 6, src: `${image6src.src}` },
];
