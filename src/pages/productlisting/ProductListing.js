import { NavBar } from "../../components/NavBar/NavBar";
import "./products.css";
import { VerticalCard } from "../../components/VerticalCard/VerticalCard";
import {Filter} from "../../components/Filters/Filter";
import { useFilter } from "../../contexts/FilterContext";
import { filterProductsByRating, showCategoricalProducts, sortProductList } from "../../reducers/FilterOperations/FilterOperations";
import { useProduct } from "../../contexts/ProductContext";

function ProductListing() {
    const {filterState} = useFilter();
    const {products} = useProduct();
    console.log(products);
    var sortedProducts = sortProductList(filterState.sortOrder, products);
    var categoricalProducts = showCategoricalProducts(filterState.categories, sortedProducts);
    var ratedProducts = filterProductsByRating(filterState.ratingOrder, categoricalProducts);
    


    return (
        <div className="page-layout">
        <NavBar />
        <main className="products-main">
            <Filter />
            <section className="main-body flex">
                <div className="product-section flex flex-wrap">
                    {ratedProducts.map(product => {
                        return (<VerticalCard product={product}/>);
                    })}
                </div>    
            </section>
        </main>
    </div>
    );


    
}

export { ProductListing }