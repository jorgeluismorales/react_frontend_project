import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className='d-flex flex-column' >
            <Link to={'#'} className={styles.link}>Preguntas frecuentes</Link>
            <Link to={'#'} className={styles.link}>Relaciones con inversionistas</Link>
            <Link to={'#'} className={styles.link}>Privacidad</Link>
            <Link to={'#'} className={styles.link}>Prueba de velocidad</Link>
          </div>
        </div>
        <div className="col-3">
          <div className='d-flex flex-column' >
            <Link to={'#'} className={styles.link}>Centro de ayuda</Link>
            <Link to={'#'} className={styles.link}>Empleo</Link>
            <Link to={'#'} className={styles.link}>Preferencias de cookies</Link>
            <Link to={'#'} className={styles.link}>Avisos legales</Link>
          </div>
        </div>
        <div className="col-3">
          <div className='d-flex flex-column' >
            <Link to={'#'} className={styles.link}>Cuenta</Link>
            <Link to={'#'} className={styles.link}>Formas de ver</Link>
            <Link to={'#'} className={styles.link}>Información corporativa</Link>
            <Link to={'#'} className={styles.link}>Solo en Netflix</Link>
          </div>
        </div>
        <div className="col-3">
          <div className='d-flex flex-column' >
            <Link to={'#'} className={styles.link}>Prensa</Link>
            <Link to={'#'} className={styles.link}>Términos de uso</Link>
            <Link to={'#'} className={styles.link}>Contáctanos</Link>
          </div>
        </div>
      </div>
      <select className={styles.selectLanguage}>
                    <option>Seleccionar idioma</option>
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
    </div>
  )
}

export default Footer