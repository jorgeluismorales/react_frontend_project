import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"

const ProtectedLayout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default ProtectedLayout