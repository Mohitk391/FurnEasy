import { NavBar } from "../../components/NavBar/NavBar";
import "./cart.css";
import sofa from "../../Assets/images/sofa.jpeg";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";
import { useWishlist } from "../../contexts/WishlistContext";
import { isItemInBucket } from "../../reducers/isItemInBucket";

function Cart(){
    const [prices, setPrices] = useState({original:0, discount:0, finalPrice: 0});
    const {cartState, cartDispatch} = useCart();
    const {items,cartList} = cartState;
    const {wishlistState, wishlistDispatch} = useWishlist();

    useEffect(()=>{
        setPrices({...prices, original: cartList.reduce((acc,curr)=>{return acc+(curr.originalPrice*curr.count)}, 0), discount: cartList.reduce((acc,curr)=>{return acc+((curr.originalPrice* curr.count)-(curr.discountPrice*curr.count))}, 0), finalPrice: cartList.reduce((acc,curr)=>{return acc+(curr.discountPrice*curr.count)}, 0) });
    },[cartList]);


    return (
        <div className="page-layout">
            <NavBar />
            <h2 class="wishlist-title">My Cart</h2>
            
            {items>0 ? (
                <div className="cart-main">
                    <div className="cart-body">
                        {cartList.map((product)=>(<div className="card vertical-card" id={items}>
                            <div className="flex">
                                <img className="responsive-image product-image" src={product.imageUrl} alt="sofa" />
                            </div>
                            <div className="card-content">
                                <div className="card-header">
                                    <p className="card-title">{product.name}</p>
                                    <p className="card-sub-title">{product.manufacturer}</p>
                                </div>
                                <div className="card-price-text flex"><p style={{textDecoration: "line-through"}}>Rs. {product.originalPrice}</p>Rs. {product.discountPrice}</div>
                                <div className="card-footer flex">
                                    <div className="card-footer-buttons flex flex-gap-1">
                                    { !isItemInBucket(wishlistState.wishlist, product) ? <button className="btn btn-hover wishlist-button" onClick={()=>{
                                    wishlistDispatch({type: "ADD_TO_WISHLIST", payload: product})}}>Add to Wishlist</button> : <button className="btn btn-hover remove-from-wishlist-button" onClick={()=>{
                                    wishlistDispatch({type: "REMOVE_FROM_WISHLIST", payload: product})}}>Remove From Wishlist</button> }
                                        <p className="quantity">Quantity: <button onClick={()=>{cartDispatch({type:"ADD_TO_CART", payload: product})}}className="qty-btn"><i className="fa fa-plus-circle" aria-hidden="true"></i></button> {product.count} <button onClick={()=>{cartDispatch({type:"REMOVE_FROM_CART", payload: product})}} className="qty-btn"><i className="fa fa-minus-circle" aria-hidden="true"></i></button></p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                        )} 
                    </div>
                    <div className="cart-price-details">
                            <div className="card">
                                <div className="card-content">
                                    <div className="cart-price-title">Price Details</div>
                                    <hr className="line-break"/>
                                    <div className="cart-price-content">
                                        <div className="cart-price-items">
                                            <table className="flex-table">
                                                <tr className="flex flex-space-between">
                                                    <th >Price</th>
                                                    <td>Rs. {prices.original}</td>
                                                </tr>
                                                <tr className="flex flex-space-between">
                                                    <th>Discount</th>
                                                    <td>Rs. {prices.discount}</td>
                                                </tr>
                                            </table>
                                        </div>
                                        
                                    </div>
                                    <hr className="line-break"/>
                                    <div className="cart-price-content flex">
                                        <div className="cart-price-title">
                                            Total Amount
                                        </div>
                                        <div className="cart-price-title">
                                            Rs. {prices.finalPrice}
                                        </div>
                                    </div>
                                    <hr className="line-break"/>
                                    <button className="btn btn-hover">Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) : <div className="cart-main">Your Cart is Empty</div>}
            
        </div>
    );
}

export { Cart}