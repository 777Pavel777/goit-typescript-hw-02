import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

interface FormElements extends HTMLFormControlsCollection {
  search: HTMLInputElement;
}

interface SearchFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const onSubmitBar = (e: React.FormEvent<SearchFormElement>) => {
    e.preventDefault();
    const data = e.currentTarget.elements.search.value;

    if (data.trim() === '') {
      toast(
        'Sorry, input is empty. Please enter something in the search field!',
        {
          position: 'top-right',
          type: 'error',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        }
      );
      return;
    }
    onSubmit(data.trim());
    e.currentTarget.reset();
  };

  return (
    <>
      <header>
        <form className={css.container} onSubmit={onSubmitBar}>
          <input
            className={css.searchBox}
            type="text"
            name="search"
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
          />
          <button className={css.searchBtn} type="submit">
            Search
          </button>
        </form>
      </header>
      <ToastContainer />
    </>
  );
};

export default SearchBar;