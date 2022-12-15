import { useSearchParams } from "react-router-dom";
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../hooks/useDebounce";

const MoviesGridPage = () => {

    const [query] = useSearchParams();
    const search = query.get("search");

    const debouncedSearch = useDebounce(search, 300);

    return (
        <div>
            <Search />
            <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
        </div>
    )
}

export default MoviesGridPage