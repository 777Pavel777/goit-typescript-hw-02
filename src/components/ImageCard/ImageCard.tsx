import css from './ImageCard.module.css';
import { FC } from 'react';
import { Image } from '../../galleryApi'; // Імпорт Image

interface ImageCardProps {
  img: Image;
  onClick: (url: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({
  img: {
    alt_description,
    urls: { small, regular },
  },
  onClick,
}) => {
  return (
    <div>
      <img
        className={css.containerCard}
        onClick={() => onClick(regular)}
        alt={alt_description || 'Image'}
        src={small}
      />
    </div>
  );
};

export default ImageCard;