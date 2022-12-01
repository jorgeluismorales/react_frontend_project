import { useEffect } from 'react'
import styles from './CreatePassword.module.css'

const CreatePassword = ({ formData, setFormData }) => {

  useEffect(() => {
    setFormData({ ...formData, email: localStorage.getItem('email') });
  }, [])

  return (
    <div className={styles.container}>
      <input
        type="email"
        placeholder='Email'
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className={styles.input}
      />

      <input
        type="password"
        placeholder='Agrega una contraseña'
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className={styles.input}
        minLength={6}
      />
    </div>
  )
}

export default CreatePassword