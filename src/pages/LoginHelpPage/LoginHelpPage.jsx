import { useState } from "react";
import { ReactComponent as NetflixLogo } from "../../assets/imagen/logoIcon.svg";
import styles from './LoginHelpPage.module.css'
import app from "../../firebase/config";
import {
    getAuth,
    sendPasswordResetEmail,

} from "firebase/auth";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const auth = getAuth(app);

const LoginHelpPage = () => {

    const { t } = useTranslation();
    const [email, setEmail] = useState("");

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Check your email");
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <>
            <div className={styles.navContainer}>
                <NetflixLogo className={styles.logo} />
                <Link to={'/signin'} className={styles.link}>{t("signIn")}</Link>
            </div>
            <div className={styles.container}>
                <form className={styles.loginForm} onSubmit={handleResetPassword}>
                    <h1 className={styles.title}>{t("forgotYourEmailPassword")}</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.inputForm}
                    />
                    <button type="submit" className={styles.resetPassBtn}>{t("changePassword")}</button>
                </form>
            </div>
        </>
    )
}

export default LoginHelpPage