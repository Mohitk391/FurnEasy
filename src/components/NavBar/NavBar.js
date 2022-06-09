import { Link } from "react-router-dom";
import {Homepage} from "../../pages/homepage/HomePage";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="nav-bar-logo"><Link className="logo" to={Homepage}>FURN-EASY</Link></div>
            <div className="navbar-search">
                <input className="navbar-searchbar" type="text" placeholder="Search for a product..."/>
                <a href="/#" ><i className="fa-solid fa-magnifying-glass"></i></a>
            </div>
            <div className="nav-bar-buttons">
                <Link to="/login.html"><button className="login">Login</button></Link>
                <Link to="/wishlist.html" className="nav-bar-icon"><i className="fa fa-heart-o" aria-hidden="true"></i> </Link>
                <Link to="/cart.html" className="nav-bar-icon"><i className="fa fa-cart-plus" aria-hidden="true"></i> </Link>
                <a href="/#" className="nav-bar-icon"><i className="fa fa-user" aria-hidden="true"></i> </a>
            </div>
        </nav>
    );
}

export { NavBar }