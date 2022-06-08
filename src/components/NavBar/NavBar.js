import "./NavBar.css";
import {Link, useNavigate} from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import { useUser } from "../../contexts/UserContext";

function NavBar() {
    const {cartState} = useCart();
    const {wishlistState} = useWishlist();
    const {items} = cartState;
    const { userState,userDispatch } = useUser();
    const navigate = useNavigate();
    return (
        <nav className="nav-bar">
            <Link className="logo" to="/"><div className="nav-bar-logo">FURN-EASY</div></Link>
            <div className="navbar-search">
                <input className="navbar-searchbar" type="text" placeholder="Search for a product..."/>
                <Link to="/" ><i className="fa-solid fa-magnifying-glass"></i></Link>
            </div>
            { userState.isUserLoggedIn ? 
            <div className="nav-bar-buttons">
                <button className="btn btn-hover sign-in" onClick = {()=>{localStorage.removeItem('token');userDispatch({type:"UNSET_USER"}); navigate("/login")}}>Logout</button>
                <Link to="/wishlist" className="nav-bar-icon badge-container"><i className="fa fa-heart-o" aria-hidden="true" title="wishlist"></i><span className="icon-badge">{wishlistState.itemsInWishlist}</span></Link>
                <Link to="/cart" className="nav-bar-icon badge-container"><i className="fa fa-cart-plus" aria-hidden="true" title="cart"></i><span className="icon-badge">{items}</span></Link>
                <Link to="/" className="nav-bar-icon"><i className="fa fa-user" aria-hidden="true" title="profile"></i></Link>
            </div>
                :
                <div className="nav-bar-buttons">
                <Link to="/login"><button className="btn btn-hover sign-in">Login</button></Link>
                <Link to="/login" className="nav-bar-icon badge-container"><i className="fa fa-heart-o" aria-hidden="true"></i></Link>
                <Link to="/login" className="nav-bar-icon badge-container"><i className="fa fa-cart-plus" aria-hidden="true"></i></Link>
                <Link to="/login" className="nav-bar-icon"><i className="fa fa-user" aria-hidden="true"></i></Link>
            </div>
            }   
        </nav>
    );
}

export { NavBar }