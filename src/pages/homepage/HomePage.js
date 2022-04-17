import bed from '../../Assets/images/bed.png';
import table from "../../Assets/images/table.jpg";
import chair from "../../Assets/images/chair.jpg";
import dining from "../../Assets/images/dining.jpeg";
import sofa from "../../Assets/images/sofa.jpeg";
import furniture from "../../Assets/images/furniture.jpg";
import "./styles.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { useFilter } from '../../contexts/FilterContext';

function Homepage() {
    const {filterDispatch} = useFilter();

    return (
        <div className="page-layout">
        <NavBar />
        <main className="main">
            <div className="featured-products flex-space-evenly">
                <div className="overlay featured-product-card">
                    <img src={sofa} alt="Sofa" />
                    <div className="overlay-layer text-overlay"><p><Link to="/products" onClick={()=>{filterDispatch({ type: "CATEGORY_HOMEPAGE", payload: "sofa" })}}>Sofa</Link></p></div>
                </div>
                <div className="overlay featured-product-card">
                    <img src={dining} alt="Dining Set" />
                    <div className="overlay-layer text-overlay"><p><Link to="/products" onClick={()=>{filterDispatch({ type: "CATEGORY_HOMEPAGE", payload: "dining" })}}>Dining Set</Link></p></div>
                </div>
                <div className="overlay featured-product-card">
                    <img src={chair} alt="Chair" />
                    <div className="overlay-layer text-overlay"><p><Link to="/products" onClick={()=>{filterDispatch({ type: "CATEGORY_HOMEPAGE", payload: "dining" })}}>Chairs</Link></p></div>
                </div>
                <div className="overlay featured-product-card">
                    <img src={table} alt="Table" />
                    <div className="overlay-layer text-overlay"><p><Link to="/products" onClick={()=>{filterDispatch({ type: "CATEGORY_HOMEPAGE", payload: "table" })}}>Tables</Link></p></div>
                </div>
                <div className="overlay featured-product-card">
                    <img src={bed} alt="Bed" />
                    <div className="overlay-layer text-overlay"><p><Link to="/products" onClick={()=>{filterDispatch({ type: "CATEGORY_HOMEPAGE", payload: "bed" })}}>Bed</Link></p></div>
                </div>
            </div>
            <div className="main-large-info overlay">
                <img className="furniture" src={furniture} alt="furniture" />
                <div className="overlay-layer text-overlay"><Link to="/products"><button className="btn products-link">See All Products</button></Link></div>
            </div>
        </main>
    </div>
    );
}

export { Homepage }