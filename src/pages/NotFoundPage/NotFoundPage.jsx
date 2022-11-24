import React from 'react'
import { useNavigate } from 'react-router-dom'
import backGround from '../../assets/imagen/404background.png'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div style={{
      backgroundSize: 'cover',
      backgroundImage: `url(${backGround})`,
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <div className={styles.alignContent}>
        <div>
          <h1 className={styles.title}>¿Te perdiste?</h1>
          <h3 className={styles.subtitle}>No encontramos esa página. Encontrarás muchos títulos para <br /> explorar en la página de inicio.</h3>
        </div>
        <button
          className={styles.backToHomeBtn}
          onClick={() => navigate('/home')}
        >
          Inicio de Netflix
        </button>

      </div>
    </div>
  )
}

export default NotFoundPage