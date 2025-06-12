import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  addPage: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ addPage }) => {
  return (
    <div className={css.container}>
      <button className={css.loadMoreBtn} onClick={addPage}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;