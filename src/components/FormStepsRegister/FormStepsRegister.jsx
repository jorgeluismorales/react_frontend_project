import { useState } from 'react'
import ChoosePlan from './steps/ChoosePlan/ChoosePlan';
import CreatePassword from './steps/CreatePassword/CreatePassword';
import PaymentMethod from './steps/PaymentMethod/PaymentMethod';
import styles from './FormStepsRegister.module.css'
import app from "../../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useTranslation } from 'react-i18next';
const firestore = getFirestore(app);
const auth = getAuth(app);

const FormStepsRegister = () => {

  const { t } = useTranslation();

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    plan: '',
    name: '',
    number: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: ''
  });

  const createPassword = t("createPassword");
  const selectPlan = t("selectPlan")
  const paymentMethod = t("paymentMethod")

  const FormTitles = [ createPassword , selectPlan, paymentMethod];

  const PageToDisplay = () => {
    switch (page) {
      case 0:
        return <CreatePassword formData={formData} setFormData={setFormData} />;
      case 1:
        return <ChoosePlan formData={formData} setFormData={setFormData} />;
      case 2:
        return <PaymentMethod formData={formData} setFormData={setFormData} />;
    }
  }

  const getRandomImage = async () => {
    const response = await fetch('https://oyster-app-5ssxa.ondigitalocean.app/api/random');
    const data = await response.json();
    return data.image;
  }

  const handleSubmmit = async () => {
    localStorage.removeItem('email');
    const userRegister = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
    const docRef = doc(firestore, `users/${userRegister.user.email}`);
    const userQuery = await getDoc(docRef);
    if (!userQuery.exists()) {
      await setDoc(docRef, {
        email: formData.email,
        plan: formData.plan,
        name: formData.name,
        number: formData.number,
        expiry: formData.expiry,
        cvc: formData.cvc,
        issuer: formData.issuer,
        profiles: [
          {
            name: 'Perfil 1',
            image: await getRandomImage(),
            id: Math.random().toString(36).substr(2, 9)
          }
        ],
        favorites: []
      })
    }
  }

  return (
    <div className={styles.form}>
      <div className={styles.formContainer}>
        <div>
          <h1 className={styles.title}>{FormTitles[page]}</h1>
        </div>
        <div className="body">
          {PageToDisplay()}
        </div>
        <div className={styles.footer}>
          <button
            className={styles.nextBtn}
            onClick={() => { page === FormTitles.length - 1 ? handleSubmmit() : setPage((currPage) => currPage + 1); }}
            disabled={page === 0 && (formData.password.trim() === '' || formData.email.trim() === '') || page === 1 && formData.plan.trim() === '' || page === 2 && (formData.name.trim() === '' || formData.number.trim() === '' || formData.expiry.trim() === '' || formData.cvc.trim() === '')}
          >
            {t("next")}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FormStepsRegister