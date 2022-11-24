import { ReactComponent as NetflixLogo } from "../../assets/imagen/logoIcon.svg";
import styles from "./LoginNavBar.module.css";
import { Link } from "react-router-dom";
const LoginNavBar = () => {


    return (
        <div className={styles.container}>
            <NetflixLogo className={styles.logo} />
            <div>
                <select className={styles.selectLanguage}>
                    <option>Seleccionar idioma</option>
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
                <Link to={'/signin'} className={styles.signInBtn}>
                    Iniciar sesión
                </Link>
            </div>
        </div>
    )
}

export default LoginNavBar