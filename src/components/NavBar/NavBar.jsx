import Logo from "../../assets/imagen/logoIcon.svg"
import "../NavBar/NavBar.css"
import Avatar from "../../assets/imagen/avatar.png"
import { Link, useNavigate } from "react-router-dom"
import app from "../../firebase/config";
import { getAuth } from "firebase/auth";
const auth = getAuth(app);

const NavBar = () => {

  const navigate = useNavigate();

  const closeSession = () => {
    navigate("/");
    auth.signOut();
  }

  return (
    (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={'/home'}><img src={Logo} width="80em" alt="logo" /></Link>
          <div className="collapse navbar-collapse ps-2" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={'/home'}>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/tv'}>Series</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/movie'}>Peliculas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'#'}>Novedades Populares</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'#'}>Mi lista</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'#'}>Explora por idiomas</Link>
              </li>
            </ul>
          </div>
        </div>

        <input type="text" className="search-click" name="" placeholder="Buscar..." />

        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={Avatar} width="30em" alt="avatar" />
          </button>
          <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
            <li><Link class="dropdown-item" to={"#"}>Cuenta</Link></li>
            <li><Link class="dropdown-item" to={"#"}>Centro de Ayuda</Link></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><Link class="dropdown-item" onClick={closeSession}>Cerrar Sesión</Link></li>
          </ul>
        </div>
      </nav>
    )
  )
}

export default NavBar