import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav className="nav-bar">
            <Link className="logo" to="/"><div className="nav-bar-logo">FURN-EASY</div></Link>
            <div className="navbar-search">
                <input className="navbar-searchbar" type="text" placeholder="Search for a product..."/>
                <Link to="/" ><i className="fa-solid fa-magnifying-glass"></i></Link>
            </div>
            <div className="nav-bar-buttons">
                <Link to="/login"><button className="login">Login</button></Link>
                <Link to="/wishlist" className="nav-bar-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></Link>
                <Link to="/cart" className="nav-bar-icon"><i className="fa fa-cart-plus" aria-hidden="true"></i></Link>
                <Link to="/" className="nav-bar-icon"><i className="fa fa-user" aria-hidden="true"></i></Link>
            </div>
        </nav>
    );
}

export { NavBar }