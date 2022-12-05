import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import RatingMovie from "../RatingMovie/RatingMovie";
import { useTranslation } from "react-i18next";

const Modal = ({ setIsOpen, type, id }) => {

    const {t} = useTranslation();

    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>{t("leaveRating")}</h5>
                    </div>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className={styles.modalContent}>
                        <RatingMovie type={type} id={id} />
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                                {t("close")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal