import { useEffect, useState } from "react";
import { getProfiles } from "../../utils/functions";
import styles from "./SelectProfile.module.css";
import { AiFillPlusCircle } from 'react-icons/ai'
import AddProfile from "../AddProfile/AddProfile";
import { useTranslation } from "react-i18next";


const SelectProfile = ({ setShowModal }) => {

    const { t } = useTranslation()
    const [profiles, setProfiles] = useState([]);
    const [addProfileModal, setAddProfileModal] = useState(false);

    useEffect(() => {
        const fetchProfiles = async () => {
            const profiles = await getProfiles();
            setProfiles(profiles);
        };
        fetchProfiles();
    }, [addProfileModal]);

    console.log(profiles);

    const addProfile = () => {
        setAddProfileModal(true);
    }

    const selectProfile = (profile) => {
        localStorage.setItem("profile", profile);
        localStorage.setItem("modal", false);
        setShowModal(false);
    }

    return (
        <div className={styles.modalProfile}>
            <div>

                <h1 className={styles.title}>{t("whoIsWatching")}</h1>
                <div className={styles.container}>
                    {profiles && profiles.map(profile => (
                        <div key={profile.id} className={styles.profileContainer} onClick={() => selectProfile(profile.image)}>
                            <img src={profile.image} alt={profile.name} className={styles.imageProfile} />
                            <h3 className={styles.profileName}>{profile.name}</h3>
                        </div>
                    ))}
                    {
                        profiles && <button className={styles.addBtn} disabled={profiles && profiles.length >= 5} onClick={addProfile}>
                            <AiFillPlusCircle className={styles.iconBtn} />
                        </button>
                    }
                </div>
            </div>
            {
                addProfileModal && <AddProfile setAddProfileModal={setAddProfileModal} />
            }
        </div>
    )
}

export default SelectProfile