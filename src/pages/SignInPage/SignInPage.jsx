import { useState } from "react";
import { AiFillGoogleCircle } from 'react-icons/ai';
import styles from './SignInPage.module.css'
import app from "../../firebase/config";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,

} from "firebase/auth";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

const SignInPage = () => {

  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
  }

  const singInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h3 className={styles.title}>{t("signIn")}</h3>
        <input className={styles.inputForm} placeholder='Email' type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className={styles.inputForm} placeholder='Password' type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className={styles.loginBtn} type="submit">{t("signIn")}</button>
        <button className={styles.googleLoginBtn} onClick={singInWithGoogle}><AiFillGoogleCircle /> {t("signInWithGoogle")}</button>
        <Link className={styles.link} to="/loginhelp">{t("forgotYourPassword")}</Link>
        <div className={styles.firstTimeOnNetflixTitle}>
          {t("firstTimeOnNetflix")} <Link to={'/'}>{t("subscribeNow")}</Link>
        </div>
        <span className={styles.firstTimeOnNetflixSubTitle}>{t("googleRecapcha")}</span>
      </form>
    </div>
  )
}

export default SignInPage