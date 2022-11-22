import { useState } from "react";
import { AiFillGoogleCircle } from 'react-icons/ai';
import styles from './SignInPage.module.css'
import app from "../../firebase/config";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,

} from "firebase/auth";
import { Link } from "react-router-dom";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

const SignInPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
  }

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h3 className={styles.title}>Inicia sesión</h3>
        <input className={styles.inputForm} placeholder='Email' type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className={styles.inputForm} placeholder='Password' type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className={styles.loginBtn} type="submit">Iniciar sesión</button>
        <button className={styles.googleLoginBtn} onClick={() => signInWithRedirect(auth, googleProvider)}><AiFillGoogleCircle /> Iniciar sesión con Google</button>
        <div className={styles.firstTimeOnNetflixTitle}>
        ¿Primera vez en Netflix? <Link to={'/'}>Suscríbete ahora.</Link>
        </div>
        <span className={styles.firstTimeOnNetflixSubTitle}>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.</span>
      </form>
    </div>
  )
}

export default SignInPage