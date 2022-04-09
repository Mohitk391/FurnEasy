import { NavBar } from "../../components/NavBar/NavBar";
import "./cart.css";
import sofa from "../../Assets/images/sofa.jpeg";
import { useCart } from "../../contexts/CartContext";

function Cart(){
    const {cartState} = useCart();
    const {items,cartList} = cartState;
    return (
        <div className="page-layout">
            <NavBar />
            <div className="cart-main">
                <div className="cart-body">
                    {items>0 ? (cartList.map((product)=>{
                        return (<div class="card vertical-card" id={items}>
                            <div class="image">
                                <img src={product.imageUrl} alt="sofa" />
                            </div>
                            <div class="card-content">
                                <div class="card-header">
                                    <p class="card-title">{product.name}</p>
                                    <p class="card-sub-title">{product.manufacturer}</p>
                                </div>
                                <div class="card-price-text">Rs. {product.discountPrice}</div>
                                <div class="card-footer flex">
                                    <div class="card-footer-buttons flex flex-gap-1">
                                        <button class="btn btn-hover wishlist-button">Add to Wishlist</button>
                                        <p class="quantity">Quantity: <button class="qty-btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 1 <button class="qty-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                        })) : (<div class="card vertical-card">
                            <div class="image">
                                <img src={sofa} alt="sofa" />
                            </div>
                            <div class="card-content">
                                <div class="card-header">
                                    <p class="card-title">Sofa</p>
                                    <p class="card-sub-title">Furn Easy</p>
                                </div>
                                <div class="card-price-text">Rs. 5000</div>
                                <div class="card-footer flex">
                                    <div class="card-footer-buttons flex flex-gap-1">
                                        <button class="btn btn-hover wishlist-button">Add to Wishlist</button>
                                        <p class="quantity">Quantity: <button class="qty-btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></button> 1 <button class="qty-btn"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></p>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    <div class="cart-price-details">
                        <div class="card">
                            <div class="card-content">
                                <div class="cart-price-title">Price Details</div>
                                <hr class="line-break"/>
                                <div class="cart-price-content flex">
                                    <div class="cart-price-items flex">
                                        <ul class="list-none price-list">
                                            <li>Price (2 items)</li>
                                            <li>Discount</li>
                                            <li>Delivery Charges</li>
                                        </ul>
                                    </div>
                                    <div class="cart-price-values">
                                        <ul class="list-none price-list">
                                            <li>Rs. 4000</li>
                                            <li>Rs. 1000</li>
                                            <li>Rs. 0500</li>
                                        </ul>
                                    </div>
                                </div>
                                <hr class="line-break"/>
                                <div class="cart-price-content flex">
                                    <div class="cart-price-title">
                                        Total Amount
                                    </div>
                                    <div class="cart-price-title">
                                        Rs. 3500
                                    </div>
                                </div>
                                <hr class="line-break"/>
                                <button class="btn btn-hover">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Cart}