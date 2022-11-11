import { useEffect, useState } from "react"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import {FaPlay} from 'react-icons/fa'
import styles from './MovieDetailPage.module.css'

const MovieDetailPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { type, id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=2508dee2967eb61f3c6a05ef9df2826a&with_network=213&language=en-US`)
      const data = await response.json()
      setMovie(data)
    }
    getInfo()
  }, [type, id])



  return (
    <div>
      {
        location.pathname.includes('video')
          ?
          <Outlet />
          :
          movie && (
            <div className="container-fluid">
              <div className="col">
                <div className="row-6"
                  style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    backgroundPosition: 'center',
                    height: '70vh',
                    width: '100vw',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '5%',
                  }}>
                    <button
                    className={styles.playButton}
                      onClick={() => navigate(`/${type}/${id}/video`)}
                    >
                     <FaPlay/> VER AHORA
                    </button> <br />
                    <p><p>{movie.original_title}</p></p>
                  </div>
                </div>
                <div className="row-6">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">...</div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                      {movie.genres.map((genre) => (
                        <span>{genre.name} </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      }



    </div>
  )
}

export default MovieDetailPage