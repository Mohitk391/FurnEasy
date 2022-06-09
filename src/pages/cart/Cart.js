import { NavBar } from "../../components/NavBar/NavBar";
import "./cart.css";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useWishlist } from "../../contexts/WishlistContext";
import { isItemInBucket } from "../../reducers/isItemInBucket";
import axios from "axios";

function Cart(){
    const [prices, setPrices] = useState({original:0, discount:0, finalPrice: 0});
    const {cartState, cartDispatch} = useCart();
    const {items,cartList} = cartState;
    const {wishlistState, wishlistDispatch} = useWishlist();
    const token = localStorage.getItem("token");

    useEffect(()=>{
        setPrices(prices=>{
            return  {...prices, 
                original: cartList.reduce((acc,curr)=>{return acc+(curr.originalPrice*curr.qty)}, 0),
                discount: cartList.reduce((acc,curr)=>{return acc+((curr.originalPrice* curr.qty)-(curr.discountPrice*curr.qty))}, 0),
                finalPrice: cartList.reduce((acc,curr)=>{return acc+(curr.discountPrice*curr.qty)}, 0) }
        });
    },[cartList]);

    const updateCart = async (product, type) => {
        const productId = product._id;
        switch(type){
            case "increment":
                try{
                    const response = await axios.post(`/api/user/cart/${productId}`,
                        {
                            action:{
                                type: type
                            } 
                        },
                        {
                            headers :{
                                authorization : token
                            }
                        }
                    ); 
                    cartDispatch({type:"SET_CART", payload: response.data.cart});
                }
                catch(error){
                    console.error(error);
                }
                break;
            case "decrement":
                try{
                    const response = product.qty>1 ? await axios.post(`/api/user/cart/${productId}`,
                        {
                            action:{
                                type: type
                            } 
                        },
                        {
                            headers :{
                                authorization : token
                            }
                        }
                    ) : await axios.delete(`/api/user/cart/${productId}`,
                        {
                            headers :{
                                authorization : token
                            }
                        }
                    );
                    cartDispatch({type:"SET_CART", payload: response.data.cart});
                }
                catch(error){
                    console.error(error);
                }
                break;
            default:
                break;
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
        <div className="page-layout">
            <NavBar />
            <h2 className="wishlist-title">My Cart</h2>
            
            {items>0 ? (
                <div className="cart-main">
                    <div className="cart-body">
                        {cartList.map((product)=>(<div className="card vertical-card" id={items} key={product._id}>
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
                                    { !isItemInBucket(wishlistState.wishlist, product) ? 
                                        <button className="btn btn-hover wishlist-button" onClick={()=>{ updateWishlist(product, "ADD")}}>
                                            Add to Wishlist
                                        </button> : 
                                        <button className="btn btn-hover remove-from-wishlist-button" onClick={()=>{ updateWishlist(product, "REMOVE")}}>
                                            Remove From Wishlist
                                        </button> 
                                    }
                                        <p className="quantity">Quantity:  <button onClick={()=>{updateCart(product,"decrement")}} className="qty-btn"><i className="fa fa-minus-circle" aria-hidden="true"></i></button> {product.qty} <button onClick={()=>{updateCart(product,"increment")}}className="qty-btn"><i className="fa fa-plus-circle" aria-hidden="true"></i></button></p>
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
                    ) : <div className="flex flex-column-wrap flex-center flex-gap-2">
                            <div><img src="data:image/jpeg;base64,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" alt="empty-cart"></img></div>
                            <div>Your Cart is Empty</div>
                            <div>Please check out <Link to="/products">Products</Link></div>
                        </div>}
            
        </div>
    );
}

export { Cart}