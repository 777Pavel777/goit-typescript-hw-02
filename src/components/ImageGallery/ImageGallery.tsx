import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { FC } from 'react';
import { Image } from '../../galleryApi';

interface ImageGalleryProps {
  images: Image[];
  onClick: (url: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onClick }) => {
  return (
    <ul className={css.container}>
      {images.map(img => (
        <li key={img.id}>
          <ImageCard img={img} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;