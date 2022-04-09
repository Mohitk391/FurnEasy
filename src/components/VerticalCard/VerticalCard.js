import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { itemExistsInCart } from "../../reducers/CartReducer";
import "./verticalCard.css";

function VerticalCard(props){
    const product = props.product;
    const { cartState,cartDispatch} = useCart();
    const {cartList} = cartState;
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
                        { !itemExistsInCart(cartList, product) ? <button onClick={()=>{
                            cartDispatch({type: "ADD_TO_CART", payload: props.product})
                        }} className="btn btn-hover cart-button">Add to Cart</button> : <Link to="/cart"><button className="btn btn-hover go-to-cart-button">Go To Cart</button></Link>}
                        <button className="btn btn-hover wishlist-button">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { VerticalCard }