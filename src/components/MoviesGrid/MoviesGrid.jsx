import Spinner from '../Loader/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMovies } from '../../hooks/useMovies';
import styles from './MoviesGrid.module.css'
import MovieCard from '../MovieCard/MovieCard';
import { useLocation } from 'react-router-dom';

const MoviesGrid = ({ search }) => {


    const location = useLocation()

    const type = location.pathname.includes('tv') ? 'tv' : 'movie'

    const { movies, isLoading, hasNextPage, fetchNextPage } = useMovies(search, type);

    if (!isLoading && movies.length === 0) {
        return <h1>No hay peliculas</h1>;
    }
    return (

        <InfiniteScroll
            dataLength={movies.length}
            hasMore={hasNextPage || isLoading}
            next={() => fetchNextPage()}
            loader={<Spinner />}
        >

            <ul className={styles.moviesGrid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </InfiniteScroll>


    )
}

export default MoviesGrid