import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './MoviesGrid.module.css'

const MoviesGrid = ({ data }) => {
    const navigate = useNavigate();
    return (
        <div className="row gap">
            {data.map((movie) => (
                <div key={Math.random() * movie.id} onClick={() => navigate(`/movie/${movie.id}`)} className="col-3" style={{ marginBottom: '20px' }}>

                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className={styles.card}/>
                    <h5>{movie.title}</h5>

                </div>
            ))}

        </div>
    )
}

export default MoviesGrid