import app from "../firebase/config";
import {
    getAuth,
    onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
const firestore = getFirestore(app);

const auth = getAuth(app);
let userEmail = null
onAuthStateChanged(auth, (user) => {
    if (user) {
        userEmail = user.email
    }

});

export const isLogged = () => {
    return userEmail !== null
}

export const addFav = async (id, type, movie) => {
    const newFavorite = {
        id,
        type,
        movie
    }

    const docRef = doc(firestore, `users/${userEmail}`);
    const userQuery = await getDoc(docRef);
    if (userQuery.exists()) {
        const user = userQuery.data();
        const favorites = user.favorites;
        const newFavorites = [...favorites, newFavorite];
        await updateDoc(docRef, {
            favorites: newFavorites
        });
    }
};

export const getFavs = async () => {
    let user = {};
    const docRef = doc(firestore, `users/${userEmail}`);
    const userQuery = await getDoc(docRef);
    if (userQuery.exists()) {
        user = userQuery.data();

    }
    return user.favorites;
};

export const removeFav = async (id) => {
    const docRef = doc(firestore, `users/${userEmail}`);
    const userQuery = await getDoc(docRef);
    if (userQuery.exists()) {
        const user = userQuery.data();
        const favorites = user.favorites;
        const newFavorites = favorites.filter((fav) => fav.id !== id);
        await updateDoc(docRef, {
            favorites: newFavorites
        });
    }
}

export const getProfiles = async () => {
    let user = {};
    const docRef = doc(firestore, `users/${userEmail}`);
    const userQuery = await getDoc(docRef);
    if (userQuery.exists()) {
        user = userQuery.data();

    }
    return user.profiles;
}

export const addUserProfile = async (profile) => {
    const docRef = doc(firestore, `users/${userEmail}`);
    const userQuery = await getDoc(docRef);
    if (userQuery.exists()) {
        const user = userQuery.data();
        const profiles = user.profiles;
        const newProfiles = [...profiles, profile];
        await updateDoc(docRef, {
            profiles: newProfiles
        });
    }
}

export const deleteProfile = async (profile) => {
    const docRef = doc(firestore, `users/${userEmail}`);
    const userQuery = await getDoc(docRef);
    if (userQuery.exists()) {
        const user = userQuery.data();
        const profiles = user.profiles;
        const newProfiles = profiles.filter((p) => p !== profile);
        await updateDoc(docRef, {
            profiles: newProfiles
        });
    }
}