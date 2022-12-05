import { useNavigate } from 'react-router-dom';
import { MdNavigateNext } from 'react-icons/md'
import styles from './RegisterForm.module.css'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const RegisterForm = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        if (email.trim() === '') {
            return;
        }
        localStorage.setItem('email', email);
        navigate("/signup");
    }

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{t("unlimitedMovies")} <br /> {t("more")}</h1>
                <h3 className={styles.subTitle}>{t("subtitle")}</h3>
                <h4 className={styles.text}>{t("readyToStart")}</h4>
            </div>
            <form
                onSubmit={handleRegister}
                className={styles.formRegister}>
                <input
                    className={styles.inputRegister}
                    placeholder='Email'
                    type="email"
                    name="emailregister"
                    id="emailregister"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    className={styles.registerBtn}>
                    {t("getStarted")} <MdNavigateNext />
                </button>
            </form>
        </div>
    )
}

export default RegisterForm