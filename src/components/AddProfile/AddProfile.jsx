import { useEffect, useState } from "react";
import styles from "./AddProfile.module.css";
import { addUserProfile } from "../../utils/functions";

const AddProfile = ({ closeModal }) => {

    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);

    useEffect(() => {
        const getRandomImage = async () => {
            const response = await fetch('https://oyster-app-5ssxa.ondigitalocean.app/api/random');
            const data = await response.json();
            return data.image;
        }
        getRandomImage().then(image => setImage(image));
    }, []);

    const addProfile = () => {
        const newProfile = {
            name,
            image,
            id: Math.random().toString(36).substr(2, 9)
        }
        addUserProfile(newProfile);
        setImage(null);
        setName(null);
        closeModal();
    }
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src={image} alt="" className={styles.imageProfile} />
                <div>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className={styles.inputProfile}
                    />
                    <div className={styles.btnContainer}>
                        <button onClick={addProfile} className={styles.addBtn}>Agregar</button>
                        <button onClick={closeModal} className={styles.cancelBtn}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProfile