import "./NavBar.css";
import {Link} from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";

function NavBar() {
    const {cartState} = useCart();
    const {wishlistState} = useWishlist();
    const {items} = cartState;
    return (
        <nav className="nav-bar">
            <Link className="logo" to="/"><div className="nav-bar-logo">FURN-EASY</div></Link>
            <div className="navbar-search">
                <input className="navbar-searchbar" type="text" placeholder="Search for a product..."/>
                <Link to="/" ><i className="fa-solid fa-magnifying-glass"></i></Link>
            </div>
            <div className="nav-bar-buttons">
                <Link to="/login"><button className="btn btn-hover sign-in">Login</button></Link>
                <Link to="/wishlist" className="nav-bar-icon badge-container"><i class="fa fa-heart-o" aria-hidden="true"></i><span class="shopping-badge">{wishlistState.itemsInWishlist}</span></Link>
                <Link to="/cart" className="nav-bar-icon badge-container"><i class="fa fa-cart-plus" aria-hidden="true"></i><span class="shopping-badge">{items}</span></Link>
                <Link to="/" className="nav-bar-icon"><i className="fa fa-user" aria-hidden="true"></i></Link>
            </div>
        </nav>
    );
}

export { NavBar }