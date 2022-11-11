import Logo from "../../assets/imagen/logoIcon.svg"
import "../NavBar/NavBar.css"

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <a href="#"><img src={Logo} width="80em"></img></a>
    <div class="collapse navbar-collapse ps-2" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Series</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Peliculas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Novedades Populares</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mi lista</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Explora por idiomas</a>
        </li>
      </ul>
    </div>
    <input type="text" class="search-click" name="" placeholder="search here..." />
  </div>
</nav>
  )
}

export default NavBar