import { createContext, useContext, useEffect, useState } from "react";

export const SelectProfileContext = createContext();

export const SelectProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState('');

    useEffect(() => {
        const profile = localStorage.getItem('profile');
        if (profile) {
            setProfile(profile);
        }
    }, []);

    const user = {
        profile,
        setProfile,
    };

    return (
        <SelectProfileContext.Provider value={user}>
            {children}
        </SelectProfileContext.Provider>
    );
};

export const useProfile = () => {
    const context = useContext(SelectProfileContext);
    return context;
}