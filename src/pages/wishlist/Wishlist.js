import "./wishlist.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { useWishlist } from "../../contexts/WishlistContext";
import { VerticalCard } from "../../components/VerticalCard/VerticalCard";
import {Link} from "react-router-dom";


function Wishlist() {
    const {wishlistState} = useWishlist();
    return (
        <div class="page-layout">
        <NavBar />
        <main class="wishlist-main">
            <h2 class="wishlist-title">My Wishlist</h2>
            <div class="main-body">
                {wishlistState.itemsInWishlist >0 ? (
                    wishlistState.wishlist.map(product=>{
                        return (<VerticalCard product={product} />)
                    })
                ) : (<div className="flex flex-column-wrap flex-center flex-gap-2">
                <div><img src="https://i.pinimg.com/originals/82/e6/4f/82e64ffa12370f75a4d4a05c3870a894.gif" alt="empty-wishlist"></img></div>
                <div>Your Wishlist is Empty</div>
                <div>Please check out <Link to="/products">Products</Link></div>
            </div>)}
            </div>
        </main>
    </div>
    );
}

export { Wishlist}