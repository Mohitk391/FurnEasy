import { NavBar } from "../../components/NavBar/NavBar";
import "./cart.css";
import sofa from "../../Assets/images/sofa.jpeg";

function Cart(){
    return (
        <div className="page-layout">
            <NavBar />
            <div className="main">
                <h2 className="cart-title">My Cart</h2>
                <div className="cart-body">
                    <div className="card">
                        <div className="image">
                            <img src={sofa} alt="card-image" />
                        </div>
                        <div className="card-content">
                            <div className="card-title">Sofa</div>
                            <div className="card-sub-title">Rs. 4000</div>
                            <div className="card-quantity">Quantity: <i className="fa fa-minus-circle" aria-hidden="true"></i>1<i className="fa fa-plus-circle" aria-hidden="true"></i> </div>
                            <div className="footer flex flex-center">
                                    <div className="product-card-button">
                                        <button className="card-button-cart">Go To Cart</button>
                                        <button className="card-button-wishlist">Remove From Wishlist</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-price-details">
                        <div className="card">
                            <div className="card-content">
                                <div className="cart-price-title">Price Details</div>
                                <hr className="line-break"/>
                                <div className="cart-price-content">
                                    <div className="cart-price-items">
                                        <ul className="list-none">
                                            <li>Price(2 items)</li>
                                            <li>Discount</li>
                                            <li>Delivery Charges</li>
                                        </ul>
                                    </div>
                                    <div className="cart-price-values">
                                        <ul className="list-none">
                                            <li>Rs. 4000</li>
                                            <li>Rs. 1000</li>
                                            <li>Rs.  500</li>
                                        </ul>
                                    </div>
                                </div>
                                <hr className="line-break"/>
                                <div className="cart-price-content">
                                    <div className="cart-price-title">
                                        Total Amount
                                    </div>
                                    <div className="cart-price-title">
                                        Rs. 3500
                                    </div>
                                </div>
                                <hr className="line-break"/>
                                <button className="card-button-cart">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Cart}