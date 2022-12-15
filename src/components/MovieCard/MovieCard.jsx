import { Link, useLocation } from "react-router-dom"
import { getMovieImg } from "../../utils/getMovieImg"
import styles from "./MovieCard.module.css"

const MovieCard = ({ movie }) => {

    const location = useLocation()

    const type = location.pathname.includes('tv') ? 'tv' : 'movie'

    const imageUrl = getMovieImg(movie.poster_path, 300);

    return (
        <li className={styles.movieCard}>
            <Link to={`/${type}/` + movie.id}>
                <img
                    width={230}
                    height={345}
                    className={styles.movieImage}
                    src={imageUrl}
                    alt={movie.title}
                />
                <div className={styles.title}>{movie.title}</div>
            </Link>
        </li>
    )
}

export default MovieCard