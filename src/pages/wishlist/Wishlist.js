import "./wishlist.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { useWishlist } from "../../contexts/WishlistContext";
import { VerticalCard } from "../../components/VerticalCard/VerticalCard";


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
                ) : (<div>Wishlist is empty</div>)}
            </div>
        </main>
    </div>
    );
}

export { Wishlist}