import { Outlet, useLocation, useNavigate } from "react-router-dom"
import app from "../../firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoginNavBar from "../../components/LoginNavbar/LoginNavbar";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Button } from "bootstrap";
const auth = getAuth(app);

const PublicLayout = () => {

  const navigate = useNavigate();
  const location = useLocation()

  const paths = ['/signup', '/signin', '/loginhelp']
  const path = location.pathname

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/home");
    }
  });


  return (
    <div style={{
      backgroundSize: 'cover',
      backgroundColor: '#000',
      width: "100%",
      height:"auto",
      paddingBottom:"152px",
      backgroundPosition: 'center',
      backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/d2e8fa91-c948-412f-b377-b9d9b9f2aa3f/AR-es-20221114-popsignuptwoweeks-perspective_alpha_website_small.jpg)`,
      boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)'

    }}>
      {!paths.includes(path) && <>
        <LoginNavBar />
        <RegisterForm />
      </>}
      <Outlet />
    </div>
  )
}

export default PublicLayout