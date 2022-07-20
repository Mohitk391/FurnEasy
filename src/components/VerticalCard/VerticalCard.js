import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import { isItemInBucket } from "../../reducers/isItemInBucket";
import "./verticalCard.css";

function VerticalCard(props){
    const product = props.product;
    const { cartState,cartDispatch} = useCart();
    const {wishlistState, wishlistDispatch} = useWishlist();
    return (
        <div className="card vertical-card">
            <div className="flex">
                <img className="responsive-image product-image" src={product.imageUrl} alt={product.name} />
            </div>
            <div className="card-content">
                <div className="card-header">
                    <p className="card-title">{product.name}</p>
                    <p className="card-sub-title">{product.manufacturer}</p>
                </div>
                <div className="card-price-text flex"><p style={{textDecoration: "line-through"}}>Rs. {product.originalPrice}</p> Rs. {product.discountPrice}</div>
                <div className="card-footer">
                    <div className="card-footer-buttons flex flex-space-evenly">
                        { !isItemInBucket(cartState.cartList, product) ? <button onClick={()=>{
                            cartDispatch({type: "ADD_TO_CART", payload: props.product})
                        }} className="btn btn-hover cart-button">Add to Cart</button> : <Link to="/cart"><button className="btn btn-hover go-to-cart-button">Go To Cart</button></Link>}
                        { !isItemInBucket(wishlistState.wishlist, product) ? <button className="btn btn-hover wishlist-button" onClick={()=>{
                            wishlistDispatch({type: "ADD_TO_WISHLIST", payload: props.product})}}>Add to Wishlist</button> : <button className="btn btn-hover remove-from-wishlist-button" onClick={()=>{
                                wishlistDispatch({type: "REMOVE_FROM_WISHLIST", payload: props.product})}}>Remove From Wishlist</button> }
                    </div>
                </div>
            </div>
        </div>
    );
}

export { VerticalCard }