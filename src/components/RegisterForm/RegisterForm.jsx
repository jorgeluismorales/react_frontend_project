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
    )
}

export default RegisterForm