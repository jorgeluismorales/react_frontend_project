import { useSearchParams } from 'react-router-dom';
import MoviesGrid from '../../components/MoviesGrid/MoviesGrid';
import Search from '../../components/Search/Search';
import { useDebounce } from '../../hooks/useDebounce';

const TvGridPage = () => {

  const [query] = useSearchParams();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);

  return (
    <>
      <Search />
      <MoviesGrid search={debouncedSearch} />
    </>
  )
}

export default TvGridPage