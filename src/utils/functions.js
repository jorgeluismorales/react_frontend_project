import app from "../firebase/config";
import {
  getAuth,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, getDoc,  updateDoc } from "firebase/firestore";
const firestore = getFirestore(app);

const auth = getAuth(app);
let userEmail = null
onAuthStateChanged(auth, (user) => {
    if (user) {
        userEmail = user.email
    }

});


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