import "./NavBar.css";
import {Link} from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import { useUser } from "../../contexts/UserContext";

function NavBar() {
    const {cartState} = useCart();
    const {wishlistState} = useWishlist();
    const {items} = cartState;
    const { userState, userDispatch } = useUser();
    return (
        <nav className="nav-bar">
            <Link className="logo" to="/"><div className="nav-bar-logo">FURN-EASY</div></Link>
            <div className="navbar-search">
                <input className="navbar-searchbar" type="text" placeholder="Search for a product..."/>
                <Link to="/" ><i className="fa-solid fa-magnifying-glass"></i></Link>
            </div>
            <div className="nav-bar-buttons">
                {!userState.isUserLoggedIn ? <Link to="/login"><button className="btn btn-hover sign-in">Login</button></Link> : <button className="btn btn-hover sign-in" onClick={()=>{userDispatch({type: "UNSET_USER"})}}>Logout</button>}
                <Link to="/wishlist" className="nav-bar-icon badge-container"><i className="fa fa-heart-o" aria-hidden="true"></i><span className="shopping-badge">{wishlistState.itemsInWishlist}</span></Link>
                <Link to="/cart" className="nav-bar-icon badge-container"><i className="fa fa-cart-plus" aria-hidden="true"></i><span className="shopping-badge">{items}</span></Link>
                <Link to="/" className="nav-bar-icon"><i className="fa fa-user" aria-hidden="true"></i></Link>
            </div>
        </nav>
    );
}

export { NavBar }