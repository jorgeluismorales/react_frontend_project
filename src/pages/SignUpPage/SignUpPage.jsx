import { useEffect, useState } from "react";
import styles from './SignUpPage.module.css'
import app from "../../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";
const auth = getAuth(app);

const SignUpPage = () => {

  const [emailUser, setEmailUser] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    setEmailUser(localStorage.getItem('email'));
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.removeItem('email');
     createUserWithEmailAndPassword(auth, emailUser, password);
  }

  return (
    <div className={styles.container}>
      <form className={styles.loginFormRegister} onSubmit={handleSubmit}>
        <h4 className={styles.title}>Crea una contraseña para que comiences tu membresía</h4>
        <input
          className={styles.inputFormRegister}
          type="email"
          value={emailUser}
          onChange={(e) => setEmailUser(e.target.value)}
          placeholder="Email"
        />
        <input
          className={styles.inputFormRegister}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <button className={styles.registerBtn}>Registrarse</button>
      </form>
    </div>
  )
}

export default SignUpPage