import { NavBar } from "../../components/NavBar/NavBar";
import bed from '../../Assets/images/bed.png';
import table from "../../Assets/images/table.jpg";
import dining from "../../Assets/images/dining.jpeg";
import sofa from "../../Assets/images/sofa.jpeg";
import "./products.css";

function ProductListing() {
    return (
        <div className="page-layout">
        <NavBar />
        <main className="main">
            <aside className="filter flex flex-column">
                <div className="filter-title-section flex flex-space-between">
                    <div className="title section-title">Filters</div>
                    <button className="btn-link clear-filter-button">Clear</button>
                </div>
                <div className="category-section">
                    <div className="title">Category</div>
                    <ul className="list-none">
                        <li className="filter-item flex"><input type="checkbox" id="category-checkbox" /><label for="category-checkbox">Sofa</label></li>
                        <li className="filter-item flex"><input type="checkbox" id="category-checkbox" /><label for="category-checkbox">Bed</label></li>
                    </ul>
                </div>
                <div className="rating-section">
                    <div className="title">Rating</div>
                    <ul className="list-none">
                        <li className="filter-item flex"><input type="radio" name="rating-radio" id="5-stars" /><label for="5-stars">5 Stars</label></li>
                        <li className="filter-item flex"><input type="radio" name="rating-radio" id="4-stars" /><label for="4-stars">4 stars</label></li>
                        <li className="filter-item flex"><input type="radio" name="rating-radio" id="3-stars" /><label for="3-stars">3 Stars</label></li>
                        <li className="filter-item flex"><input type="radio" name="rating-radio" id="2-stars" /><label for="2-stars">2 stars</label></li>
                        <li className="filter-item flex"><input type="radio" name="rating-radio" id="1-stars" /><label for="1-stars">1 Stars</label></li>
                    </ul>
                </div>
                <div className="sort-section">
                    <div className="title">Sort By</div>
                    <ul className="list-none">
                        <li className="filter-item flex"><input type="radio" name="sort-radio" id="high-to-low" /><label for="high-to-low">Price - High to Low</label></li>
                        <li className="filter-item flex"><input type="radio" name="sort-radio" id="low-to-high" /><label for="low-to-high">Price - Low to High</label></li>
                    </ul>
                </div>
            </aside>
            <section className="main-body flex">
                <div className="product-section flex flex-wrap">
                    <div className="card vertical-card">
                        <div className="img"
                            style={{backgroundImage: `url(${sofa})`}} alt="sofa">
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <p className="card-title">Sofa</p>
                                <p className="card-sub-title">From Furn-Easy</p>
                            </div>
                            <div className="card-price-text">Rs. 5000</div>
                            <div className="card-footer">
                                <div className="card-footer-buttons  flex flex-space-evenly">
                                    <button className="btn btn-hover cart-button">Add to Cart</button>
                                    <button className="btn btn-hover wishlist-button">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card vertical-card">
                        <div className="img img-url"
                            style={{backgroundImage: `url(${dining})`}} alt="dining">
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <p className="card-title">Dining Set</p>
                                <p className="card-sub-title">From Furn-Easy</p>
                            </div>
                            <div className="card-price-text">Rs. 10000</div>
                            <div className="card-footer">
                                <div className="card-footer-buttons flex flex-space-evenly">
                                    <button className="btn btn-hover cart-button">Add to Cart</button>
                                    <button className="btn btn-hover wishlist-button">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card vertical-card">
                        <div className="img"
                            style={{backgroundImage: `url(${bed})`}} alt="bed">
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <p className="card-title">Bed</p>
                                <p className="card-sub-title">From Furn-Easy</p>
                            </div>
                            <div className="card-price-text">Rs. 13000</div>
                            <div className="card-footer">
                                <div className="card-footer-buttons flex flex-space-evenly">
                                    <button className="btn btn-hover go-to-cart-button">Go to Cart</button>
                                    <button className="btn btn-hover wishlist-button">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card vertical-card">
                        <div className="img img-url"
                            style={{backgroundImage: `url(${table})`}} alt="dining">
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <p className="card-title">Table</p>
                                <p className="card-sub-title">From Furn-Easy</p>
                            </div>
                            <div className="card-price-text">Rs. 4000</div>
                            <div className="card-footer">
                                <div className="card-footer-buttons flex flex-space-evenly">
                                    <button className="btn btn-hover cart-button">Add to Cart</button>
                                    <button className="btn btn-hover remove-from-wishlist-button">Remove from Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card vertical-card">
                        <div className="img"
                            style={{backgroundImage: `url(${sofa})`}} alt="sofa">
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <p className="card-title">Sofa</p>
                                <p className="card-sub-title">From Furn-Easy</p>
                            </div>
                            <div className="card-price-text">Rs. 5000</div>
                            <div className="card-footer">
                                <div className="card-footer-buttons flex flex-space-evenly">
                                    <button className="btn btn-hover cart-button">Add to Cart</button>
                                    <button className="btn btn-hover wishlist-button">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card vertical-card">
                        <div className="img"
                            style={{backgroundImage: `url(${sofa})`}} alt="sofa">
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <p className="card-title">Sofa</p>
                                <p className="card-sub-title">From Furn-Easy</p>
                            </div>
                            <div className="card-price-text">Rs. 5000</div>
                            <div className="card-footer">
                                <div className="card-footer-buttons flex flex-space-evenly">
                                    <button className="btn btn-hover cart-button">Add to Cart</button>
                                    <button className="btn btn-hover wishlist-button">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card vertical-card">
                        <div className="img"
                            style={{backgroundImage: `url(${sofa})`}} alt="sofa">
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <p className="card-title">Sofa</p>
                                <p className="card-sub-title">From Furn-Easy</p>
                            </div>
                            <div className="card-price-text">Rs. 5000</div>
                            <div className="card-footer">
                                <div className="card-footer-buttons flex flex-space-evenly">
                                    <button className="btn btn-hover cart-button">Add to Cart</button>
                                    <button className="btn btn-hover wishlist-button">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card vertical-card">
                        <div className="img"
                            style={{backgroundImage: `url(${sofa})`}} alt="sofa">
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <p className="card-title">Sofa</p>
                                <p className="card-sub-title">From Furn-Easy</p>
                            </div>
                            <div className="card-price-text">Rs. 5000</div>
                            <div className="card-footer">
                                <div className="card-footer-buttons flex flex-space-evenly">
                                    <button className="btn btn-hover cart-button">Add to Cart</button>
                                    <button className="btn btn-hover wishlist-button">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card vertical-card">
                        <div className="img"
                            style={{backgroundImage: `url(${sofa})`}} alt="sofa">
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <p className="card-title">Sofa</p>
                                <p className="card-sub-title">From Furn-Easy</p>
                            </div>
                            <div className="card-price-text">Rs. 5000</div>
                            <div className="card-footer">
                                <div className="card-footer-buttons flex flex-space-evenly">
                                    <button className="btn btn-hover cart-button">Add to Cart</button>
                                    <button className="btn btn-hover wishlist-button">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card vertical-card">
                        <div className="img"
                            style={{backgroundImage: `url(${sofa})`}} alt="sofa">
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <p className="card-title">Sofa</p>
                                <p className="card-sub-title">From Furn-Easy</p>
                            </div>
                            <div className="card-price-text">Rs. 5000</div>
                            <div className="card-footer">
                                <div className="card-footer-buttons flex flex-space-evenly">
                                    <button className="btn btn-hover cart-button">Add to Cart</button>
                                    <button className="btn btn-hover wishlist-button">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
        </main>
    </div>
    );

}

export { ProductListing }