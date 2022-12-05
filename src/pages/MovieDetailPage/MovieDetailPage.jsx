import { useEffect, useState } from "react"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { FaPlay } from 'react-icons/fa'
import { GrAdd } from 'react-icons/gr'
import styles from './MovieDetailPage.module.css'
import Slider from "../../components/Slider/Slider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addFav } from "../../utils/functions"
import { useTranslation } from "react-i18next"

const MovieDetailPage = () => {

  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const { type, id } = useParams()
  const [movie, setMovie] = useState(null)
  const [related, setRelated] = useState(null)

  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=2508dee2967eb61f3c6a05ef9df2826a&with_network=213&language=en-US`)
      const data = await response.json()
      setMovie(data)
    }
    const getRelated = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/similar?api_key=2508dee2967eb61f3c6a05ef9df2826a&with_network=213&language=en-US`)
      const data = await response.json()
      setRelated(data)
    }
    getRelated()
    getInfo()
  }, [type, id])

  const genres = movie?.genres.map(genre => genre.name).join(', ')
  const productionCompanies = movie?.production_companies.map(company => company.name).join(', ')
  const productionCountries = movie?.production_countries.map(country => country.name).join(', ')

  const notify = () => {
    toast.success(t("addedToFavs"), {
      position: toast.POSITION.TOP_CENTER
    });
  }

  return (
    <div>
      {
        location.pathname.includes('video')
          ?
          <Outlet />
          :
          movie && (
            <div>
              <div className="col">
                <div className="row-6"
                  style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    backgroundPosition: 'center',
                    height: '100vh',
                    width: '100vw',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '5%',
                    color: 'white'
                  }}>
                    <div style={{ marginBottom: '20px' }}>
                      <h4>{type === 'movie' ? movie.title : movie.name}</h4>
                      <span>{type === 'movie' ? movie.release_date.split('-')[0] : movie.first_air_date.split('-')[0]} • {genres}</span>
                    </div>
                    <button
                      className={styles.playButton}
                      onClick={() => navigate(`/${type}/${id}/video`)}
                    >
                      <FaPlay /> {t("watchNow")}
                    </button>
                    <button className={styles.addFavButton} onClick={() => {
                      addFav(id, type, movie)
                      notify()
                    }}><GrAdd /></button><br />
                    <div style={{ width: '45%', marginTop: '10px' }}><p>{movie.overview}</p></div>
                  </div>
                </div>
                <div className="row-6 mt-4">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">{t("suggestions")}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{t("details")}</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                      {related && <Slider items={related} type={type} />}
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">

                      <div className="row">
                        <div className="col-4">
                          <h4>{type === 'movie' ? movie.title : movie.name}</h4>
                          <p>{movie.overview}</p>
                        </div>

                        <div className="col-4">
                          <p><b>{t("releaseYear")}</b>: {type === 'movie' ? movie.release_date.split('-')[0] : movie.first_air_date.split('-')[0]}</p>
                          <p><b>{t("genre")}</b>: {genres}</p>
                          <p><b>{t("originalTitle")}</b>: {type === 'movie' ? movie.original_title : movie.original_name}</p>
                          <a href={movie.homepage} target='blank'><b>Home Page</b></a>
                        </div>
                        <div className="col-4">
                          <p><b>{t("producer")}</b>: {productionCompanies}</p>
                          <p><b>{t("country")}</b>: {productionCountries}</p>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          )
      }



    </div>
  )
}

export default MovieDetailPage