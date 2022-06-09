import { NavBar } from "../../components/NavBar/NavBar";
import "./products.css";
import { VerticalCard } from "../../components/VerticalCard/VerticalCard";
import {data} from "../../data/data";

function ProductListing() {
    return (
        <div className="page-layout">
        <NavBar />
        <main className="products-main">
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
                    {data.map(product => {
                        return (<VerticalCard product={product}/>);
                    })}
                </div>    
            </section>
        </main>
    </div>
    );

}

export { ProductListing }