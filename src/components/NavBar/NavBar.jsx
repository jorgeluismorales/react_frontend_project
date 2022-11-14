import Logo from "../../assets/imagen/logoIcon.svg"
import "../NavBar/NavBar.css"
import Avatar from "../../assets/imagen/avatar.png"

const NavBar = () => {
  return (
    (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <a href="#"><img src={Logo} width="80em"></img></a>
    <div className="collapse navbar-collapse ps-2" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Series</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Peliculas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Novedades Populares</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mi lista</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Explora por idiomas</a>
        </li>
      </ul>
    </div>
  </div>

  <input type="text" className="search-click" name="" placeholder="Buscar..." />

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={Avatar} width="30em"></img>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Cuenta</a></li>
            <li><a class="dropdown-item" href="#">Centro de Ayuda</a></li>
            <li><a class="dropdown-item" href="#">Cerrar Sesión</a></li>
          </ul>
        </li>
      </ul>
    </div>

</nav>
    )
  )
}

export default NavBar