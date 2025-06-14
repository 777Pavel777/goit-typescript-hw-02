import css from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <div className={css.container}>
      <RotatingLines
        visible={true}
        width="96"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;