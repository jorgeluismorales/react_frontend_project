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


  <div className="dropdown">
  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <img src={Avatar} width="30em"></img>
    </button>
    <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
      <li><a className="dropdown-item" href="#">Cuenta</a></li>
      <li><a className="dropdown-item" href="#">Centro de Ayuda</a></li>
      <li><hr className="dropdown-divider"></hr></li>
      <li><a className="dropdown-item" href="#">Cerrar Sesión</a></li>
  </ul>
</div>

</nav>
    )
  )
}

export default NavBar