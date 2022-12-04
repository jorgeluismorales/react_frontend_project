import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFavs } from '../../utils/functions'
import styles from './FavoritesPage.module.css'
const FavoritesPage = () => {

    const [favs, setFavs] = useState([])

    useEffect(() => {
        const fetchFavs = async () => {
            const favs = await getFavs()
            setFavs(favs)
        }
        fetchFavs()
    }, [])

    console.log(favs)
    return (
        <div className="container mt-4">
            <div className='row gap'>
                {favs && favs.map(fav => (
                    <div className="col-3" key={fav.id}>
                        <Link to={`/${fav.type}/${fav.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w300${fav.movie.poster_path}`} alt={fav.type === 'movie' ? fav.movie.title : fav.movie.name} className={styles.image} />
                            <h5 className={styles.title}>{fav.type === 'movie' ? fav.movie.title : fav.movie.name}</h5>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FavoritesPage