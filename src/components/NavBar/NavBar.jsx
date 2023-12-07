import CartWidget from "./CartWidget"
import "./NavBar.scss"


const NavBar = () =>{
    return(
        <div id="navbar">
            
            <ul>
                <img className="nav-logo" src="../public/img/logo.png" alt="" />
                <li>
                    <a className="nav-link" href="">MOUNTAIN BIKE</a>
                </li>
                <li>
                    <a className="nav-link" href="">RUTA</a>
                </li>
                <li>
                    <a className="nav-link" href="">URBANA</a>
                </li>
                <CartWidget/>
            </ul>
            
        </div>
    )
}

export default NavBar