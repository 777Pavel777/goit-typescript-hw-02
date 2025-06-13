import { useEffect, useState } from 'react';
import { fetchGallery, Image, GalleryResponse } from '../galleryApi';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageModule from './ImageModule/ImageModule';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMassege/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

const App: React.FC = () => {
  const [img, setImg] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [imgURL, setImgURL] = useState<string | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(false);

  const handleSubmit = (newQuery: string): void => {
    setQuery(newQuery);
    setImg([]);
    setPage(1);
    setError(false);
    setLoading(false);
    setImgURL(null);
  };

  const handleLoadMore = (): void => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    const getGallery = async (): Promise<void> => {
      try {
        setError(false);
        setLoading(true);

        const data: GalleryResponse = await fetchGallery(query, page);
        setShowBtn(data.total_pages > 0 && data.total_pages !== page);
        setImg(prevGallery => [...prevGallery, ...data.results]);
      } catch (error) {
        setError(true);
        console.error('Error fetching gallery:', error);
      } finally {
        setLoading(false);
      }
    };
    getGallery();
  }, [page, query]);

  const showModal = (url: string): void => {
    setImgURL(url);
    setModal(true);
  };

  const closeModal = (): void => {
    setModal(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {img.length > 0 && <ImageGallery images={img} onClick={showModal} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {img.length > 0 && !loading && showBtn && (
        <LoadMoreBtn addPage={handleLoadMore} />
      )}
      <ImageModule image={imgURL} state={modal} close={closeModal} />
    </>
  );
};

export default App;