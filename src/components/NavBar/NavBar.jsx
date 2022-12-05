import Logo from "../../assets/imagen/logoIcon.svg"
import "../NavBar/NavBar.css"
import Avatar from "../../assets/imagen/avatar.png"
import { Link, useNavigate } from "react-router-dom"
import app from "../../firebase/config";
import { getAuth } from "firebase/auth";
import { useTranslation } from "react-i18next";
const auth = getAuth(app);

const NavBar = () => {

  const {t} = useTranslation();
  const navigate = useNavigate();

  const closeSession = () => {
    navigate("/");
    auth.signOut();
  }

  return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={'/home'}><img src={Logo} width="80em" alt="logo" /></Link>
          <div className="collapse navbar-collapse ps-2" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={'/home'}>{t("home")}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/tv'}>Series</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/movie'}>{t("movies")}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'#'}>{t("popularNews")}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/favorites'}>{t("myList")}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'#'}>{t("browseByLanguage")}</Link>
              </li>
            </ul>
          </div>
        </div>

        <input type="text" className="search-click" name="" placeholder="Buscar..." />

        <div className="dropdown">
          <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={Avatar} width="30em" alt="avatar" />
          </button>
          <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
            <li><Link className="dropdown-item" to={"#"}>{t("account")}</Link></li>
            <li><Link className="dropdown-item" to={"#"}>{t("helpCenter")}</Link></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><Link className="dropdown-item" onClick={closeSession}>{t("closeSession")}</Link></li>
          </ul>
        </div>
      </nav>
      </>
  )
}

export default NavBar;