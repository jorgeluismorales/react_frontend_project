import { ReactComponent as NetflixLogo } from "../../assets/imagen/logoIcon.svg";
import styles from "./LoginNavBar.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginNavBar = () => {

    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem("language", e.target.value);
        window.location.reload();
    }

    return (
        <div className={styles.container}>
            <NetflixLogo className={styles.logo} />
            <div>
                <select className={styles.selectLanguage} onChange={handleChangeLanguage}>
                    <option>{t("selectLanguage")}</option>
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
                <Link to={'/signin'} className={styles.signInBtn}>
                    {t("signIn")}
                </Link>
            </div>
        </div>
    )
}

export default LoginNavBar