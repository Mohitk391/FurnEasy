import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import { isItemInBucket } from "../../reducers/isItemInBucket";
import "./verticalCard.css";

function VerticalCard(props){
    const product = props.product;
    const { cartState,cartDispatch} = useCart();
    const {wishlistState, wishlistDispatch} = useWishlist();
    const token = localStorage.getItem("token");
    const {cartList} = cartState;

    const addToCart = async (product) => {
        try {
            const response = await axios.post("/api/user/cart",
                {
                    product
                },
                {
                    headers: {
                        authorization : token
                    },
                }
            );
            cartDispatch({type: "SET_CART", payload: response.data.cart});
        }
        catch(error){
            console.error(error);
        }
    }

    const updateWishlist = async (product, type) => {
        try{
            const response = (type === "ADD" ) ? await axios.post("/api/user/wishlist",
                {
                    product
                },
                {
                    headers: {
                        authorization : token
                    },
                }
            ) : await axios.delete(`/api/user/wishlist/${product._id}`,
                {
                    headers: {
                        authorization : token
                    },
                }
            );
            console.log(response.data.wishlist);
            wishlistDispatch({type:"SET_WISHLIST", payload: response.data.wishlist});
        }
        catch(error){
            console.error(error);
        }
    }
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
                        { !isItemInBucket(cartList,product) ? 
                        <button onClick={()=>{ addToCart(product)}} className="btn btn-hover cart-button">
                            Add to Cart
                        </button>
                        : <Link to="/cart">
                                <button className="btn btn-hover go-to-cart-button">
                                    Go To Cart
                                </button>
                            </Link>}
                        { !isItemInBucket(wishlistState.wishlist, product) ? 
                        <button className="btn btn-hover wishlist-button" onClick={()=>{ updateWishlist(product, "ADD")}}>
                            Add to Wishlist
                        </button> : 
                        <button className="btn btn-hover remove-from-wishlist-button" onClick={()=>{ updateWishlist(product, "REMOVE")}}>
                            Remove From Wishlist
                        </button> 
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export { VerticalCard }