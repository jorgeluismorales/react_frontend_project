import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import backGround from '../../assets/imagen/404background.png'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {

  const { t } = useTranslation()
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
          <h1 className={styles.title}>{t("lostYourWay")}</h1>
          <h3 className={styles.subtitle}>{t("lostPage1")} <br /> {t("lostPage2")}</h3>
        </div>
        <button
          className={styles.backToHomeBtn}
          onClick={() => navigate('/home')}
        >
          {t("backToHome")}
        </button>

      </div>
    </div>
  )
}

export default NotFoundPage