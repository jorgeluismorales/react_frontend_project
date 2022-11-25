import { Outlet, useNavigate } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import app from "../../firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

const ProtectedLayout = () => {

  const navigate = useNavigate();


   onAuthStateChanged(auth, (user) => {
     console.log(user);
     if (!user) {
       navigate("/");
     }
   });

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default ProtectedLayout