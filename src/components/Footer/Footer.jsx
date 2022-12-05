import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {

  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className='d-flex flex-column' >
            <Link to={'#'} className={styles.link}>{t("frequentlyAskedQuestions")}</Link>
            <Link to={'#'} className={styles.link}>{t("investorRelations")}</Link>
            <Link to={'#'} className={styles.link}>{t("privacy")}</Link>
            <Link to={'#'} className={styles.link}>{t("speedTest")}</Link>
          </div>
        </div>
        <div className="col-3">
          <div className='d-flex flex-column' >
            <Link to={'#'} className={styles.link}>{t("helpCenter")}</Link>
            <Link to={'#'} className={styles.link}>{t("jobs")}</Link>
            <Link to={'#'} className={styles.link}>{t("cookiePreferences")}</Link>
            <Link to={'#'} className={styles.link}>{t("legalNotices")}</Link>
          </div>
        </div>
        <div className="col-3">
          <div className='d-flex flex-column' >
            <Link to={'#'} className={styles.link}>{t("account")}</Link>
            <Link to={'#'} className={styles.link}>{t("waysToWatch")}</Link>
            <Link to={'#'} className={styles.link}>{t("corporateInformation")}</Link>
            <Link to={'#'} className={styles.link}>{t("onlyOnNetflix")}</Link>
          </div>
        </div>
        <div className="col-3">
          <div className='d-flex flex-column' >
            <Link to={'#'} className={styles.link}>{t("mediaCenter")}</Link>
            <Link to={'#'} className={styles.link}>{t("termsOfUse")}</Link>
            <Link to={'#'} className={styles.link}>{t("contactUs")}</Link>
          </div>
        </div>
      </div>
      <select className={styles.selectLanguage}>
                    <option>{t("selectLanguage")}</option>
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
    </div>
  )
}

export default Footer