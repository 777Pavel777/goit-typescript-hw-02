import css from './ImageModule.module.css';
import Modal from 'react-modal';

interface ImageModuleProps {
  close: () => void;
  image: string | null;
  state: boolean;
}

const ImageModule: React.FC<ImageModuleProps> = ({ close, image, state }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={state}
      onRequestClose={close}
      contentLabel="Example Modal"
    >
      {image && <img className={css.element} src={image} alt="Modal content" />}
    </Modal>
  );
};

export default ImageModule;