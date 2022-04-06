import { ProductListing } from "../productlisting/ProductListing";
import bed from '../../Assets/images/bed.png';
import table from "../../Assets/images/table.jpg";
import chair from "../../Assets/images/chair.jpg";
import dining from "../../Assets/images/dining.jpeg";
import sofa from "../../Assets/images/sofa.jpeg";
import furniture from "../../Assets/images/furniture.jpg";
import "./styles.css";
import { NavBar } from "../../components/NavBar/NavBar";

function Homepage() {

    return (
        <div className="page-layout">
        <NavBar />
        <main className="main">
            <div className="featured-products flex-space-evenly">
                <div className="overlay featured-product-card">
                    <img src={sofa} alt="Sofa" />
                    <div className="overlay-layer text-overlay"><p>Sofa</p></div>
                </div>
                <div className="overlay featured-product-card">
                    <img src={dining} alt="Dining Set" />
                    <div className="overlay-layer text-overlay"><p>Dining Set</p></div>
                </div>
                <div className="overlay featured-product-card">
                    <img src={chair} alt="Chair" />
                    <div className="overlay-layer text-overlay"><p>Chairs</p></div>
                </div>
                <div className="overlay featured-product-card">
                    <img src={table} alt="Table" />
                    <div className="overlay-layer text-overlay"><p>Tables</p></div>
                </div>
                <div className="overlay featured-product-card">
                    <img src={bed} alt="Bed" />
                    <div className="overlay-layer text-overlay"><p>Bed</p></div>
                </div>
            </div>
            <div className="main-large-info overlay">
                <img className="furniture" src={furniture} alt="furniture" />
                <div className="overlay-layer text-overlay"><a href={ ProductListing }><button className="btn products-link">See All Products</button></a></div>
            </div>
        </main>
    </div>
    );
}

export { Homepage }