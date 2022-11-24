import { useNavigate } from 'react-router-dom';
import { MdNavigateNext } from 'react-icons/md'
import styles from './RegisterForm.module.css'
import { useState } from 'react';
const RegisterForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        if(email.trim() === ''){
            return;
        }
        //set email to localstorage
        localStorage.setItem('email', email);
        navigate("/signup");
    }

    return (
        <div className={styles.container}>
        <div className={styles.textContainer}>
        <h1 className={styles.title}>Películas y series ilimitadas <br /> y mucho más</h1>
        <h3 className={styles.subTitle}>Disfruta donde quieras. Cancela cuando quieras.</h3>
        <h4  className={styles.text}>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h4>
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
                Comenzar <MdNavigateNext />
            </button>
        </form>
        </div>
    )
}

export default RegisterForm