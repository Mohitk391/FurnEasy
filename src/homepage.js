
function Homepage() {

    return (
        <div className="page-layout">
        <nav className="nav-bar">
            <div className="nav-bar-logo"><a className="logo" href="/index.html">FURN-EASY</a></div>
            <div className="navbar-search">
                <input className="navbar-searchbar" type="text" placeholder="Search for a product..."/>
                <a href="#" ><i className="fa-solid fa-magnifying-glass"></i></a>
            </div>
            <div className="nav-bar-buttons">
                <a href="/login.html"><button className="login">Login</button></a>
                <a href="/wishlist.html" className="nav-bar-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                <a href="/cart.html" className="nav-bar-icon"><i className="fa fa-cart-plus" aria-hidden="true"></i></a>
                <a  href="#" className="nav-bar-icon"><i className="fa fa-user" aria-hidden="true"></i></a>
            </div>
        </nav>
        <main className="main">
            <div className="featured-products flex-space-evenly">
                <div className="overlay featured-product-card">
                    <img src="/assets/sofa.jpeg" alt="Sofa" />
                    <div className="overlay-layer text-overlay"><p>Sofa</p></div>
                </div>
                <div className="overlay featured-product-card">
                    <img src="/assets/dining.jpeg" alt="Dining Set" />
                    <div className="overlay-layer text-overlay"><p>Dining Set</p></div>
                </div>
                <div className="overlay featured-product-card">
                    <img src="/assets/chair.jpg" alt="Chair" />
                    <div className="overlay-layer text-overlay"><p>Chairs</p></div>
                </div>
                <div className="overlay featured-product-card">
                    <img src="/assets/table.jpg" alt="Table" />
                    <div className="overlay-layer text-overlay"><p>Tables</p></div>
                </div>
                <div className="overlay featured-product-card">
                    <img src="/assets/bed.png" alt="Bed" />
                    <div className="overlay-layer text-overlay"><p>Bed</p></div>
                </div>
            </div>
            <div className="main-large-info overlay">
                <img className="furniture" src="/assets/furniture.jpg" alt="furniture" />
                <div className="overlay-layer text-overlay"><a href="/products.html"><button className="btn products-link">See All Products</button></a></div>
            </div>
        </main>
    </div>
    );
}