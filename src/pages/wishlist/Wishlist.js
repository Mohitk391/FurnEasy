import "./wishlist.css";
import { NavBar } from "../../components/NavBar/NavBar";
import sofa from "../../Assets/images/sofa.jpeg";


function Wishlist() {
    return (
        <div class="page-layout">
        <NavBar />
        <main class="wishlist-main">
            <h2 class="wishlist-title">My Wishlist</h2>
            <div class="main-body">
                <div class="card vertical-card">
                    <div class="img"
                        style={{backgroundImage: `url(${sofa})`}} alt="sofa">
                    </div>
                    <div class="card-content">
                        <div class="card-header">
                            <p class="card-title">Sofa</p>
                            <p class="card-sub-title">From Furn-Easy</p>
                        </div>
                        <div class="card-price-text">Rs. 5000</div>
                        <div class="card-footer">
                            <div class="card-footer-buttons flex flex-space-between">
                                <button class="btn btn-hover cart-button">Add to Cart</button>
                                <button class="btn btn-hover remove-from-wishlist-button">Remove from Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card vertical-card">
                    <div class="img"
                        style={{backgroundImage: `url(${sofa})`}} alt="sofa">
                    </div>
                    <div class="card-content">
                        <div class="card-header">
                            <p class="card-title">Sofa</p>
                            <p class="card-sub-title">From Furn-Easy</p>
                        </div>
                        <div class="card-price-text">Rs. 5000</div>
                        <div class="card-footer flex">
                            <div class="card-footer-buttons">
                                <button class="btn btn-hover cart-button">Add to Cart</button>
                                <button class="btn btn-hover remove-from-wishlist-button">Remove from Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card vertical-card">
                    <div class="img"
                        style={{backgroundImage: `url(${sofa})`}} alt="sofa">
                    </div>
                    <div class="card-content">
                        <div class="card-header">
                            <p class="card-title">Sofa</p>
                            <p class="card-sub-title">From Furn-Easy</p>
                        </div>
                        <div class="card-price-text">Rs. 5000</div>
                        <div class="card-footer flex">
                            <div class="card-footer-buttons">
                                <button class="btn btn-hover cart-button">Add to Cart</button>
                                <button class="btn btn-hover remove-from-wishlist-button">Remove from Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card vertical-card">
                    <div class="img"
                        style={{backgroundImage: `url(${sofa})`}} alt="sofa">
                    </div>
                    <div class="card-content">
                        <div class="card-header">
                            <p class="card-title">Sofa</p>
                            <p class="card-sub-title">From Furn-Easy</p>
                        </div>
                        <div class="card-price-text">Rs. 5000</div>
                        <div class="card-footer flex">
                            <div class="card-footer-buttons">
                                <button class="btn btn-hover cart-button">Add to Cart</button>
                                <button class="btn btn-hover remove-from-wishlist-button">Remove from Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card vertical-card">
                    <div class="img"
                        style={{backgroundImage: `url(${sofa})`}} alt="sofa">
                    </div>
                    <div class="card-content">
                        <div class="card-header">
                            <p class="card-title">Sofa</p>
                            <p class="card-sub-title">From Furn-Easy</p>
                        </div>
                        <div class="card-price-text">Rs. 5000</div>
                        <div class="card-footer flex">
                            <div class="card-footer-buttons">
                                <button class="btn btn-hover cart-button">Add to Cart</button>
                                <button class="btn btn-hover remove-from-wishlist-button">Remove from Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </main>
    </div>
    );
}

export { Wishlist}