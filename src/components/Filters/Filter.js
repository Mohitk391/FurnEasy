import { useFilter } from "../../contexts/FilterContext";

function Filter() {
    const {filterState, filterDispatch} = useFilter();
    const {categories, ratingOrder, priceOrder} = filterState.selectedFilters;

    return <aside className="filter flex flex-column">
        <div className="filter-title-section flex flex-space-between">
            <div className="title section-title">Filters</div>
            <button onClick={()=>{
                filterDispatch({type: "CLEAR_FILTERS"});
            }} className="btn-link clear-filter-button">Clear</button>
        </div>
        <div className="category-section">
            <div className="title">Category</div>
            <ul className="list-none">
                <li className="filter-item flex">
                    <input type="checkbox" id="category-checkbox" value={"sofa"} checked={categories.includes("sofa")}
                        onChange={(e) => { filterDispatch({ type: "CATEGORY", payload: "sofa" }); } } />
                    <label htmlFor="category-checkbox">Sofa Set</label>
                </li>
                <li className="filter-item flex">
                    <input type="checkbox" id="category-checkbox" value={"bed"} checked={categories.includes("bed")}
                        onChange={(e) => { filterDispatch({ type: "CATEGORY", payload: "bed" }); } } />
                    <label htmlFor="category-checkbox">Bed</label>
                </li>
                <li className="filter-item flex">
                    <input type="checkbox" id="category-checkbox" value={"dining"} checked={categories.includes("dining")}
                        onChange={(e) => { filterDispatch({ type: "CATEGORY", payload: "dining" }); } } />
                    <label htmlFor="category-checkbox">Dining Set</label>
                </li>
                <li className="filter-item flex">
                    <input type="checkbox" id="category-checkbox" value={"table"} checked={categories.includes("table")}
                        onChange={(e) => { filterDispatch({ type: "CATEGORY", payload: "table" }); } } />
                    <label htmlFor="category-checkbox">Table</label>
                </li>
            </ul>
        </div>
        <div className="rating-section">
            <div className="title">Rating</div>
            <ul className="list-none">
                <li className="filter-item flex">
                    <input type="radio" name="rating-radio" id="5-stars" value={"FIVE_STARS"} checked={ratingOrder === "FIVE_STARS"}
                        onClick={() => { filterDispatch({ type: "RATING_ORDER", payload: "FIVE_STARS" }); } } />
                    <label htmlFor="5-stars">5 Stars</label>
                </li>
                <li className="filter-item flex">
                    <input type="radio" name="rating-radio" id="4-stars" value={"FOUR_STARS"} checked={ratingOrder === "FOUR_STARS"}
                        onClick={() => { filterDispatch({ type: "RATING_ORDER", payload: "FOUR_STARS" });  } } />
                    <label htmlFor="4-stars">4 stars</label>
                </li>
                <li className="filter-item flex">
                    <input type="radio" name="rating-radio" id="3-stars" value={"THREE_STARS"} checked={ratingOrder === "THREE_STARS"}                
                        onClick={() => { filterDispatch({ type: "RATING_ORDER", payload: "THREE_STARS" }); } } />
                    <label htmlFor="3-stars">3 Stars</label>
                </li>
                <li className="filter-item flex">
                    <input type="radio" name="rating-radio" id="2-stars" value={"TWO_STARS"} checked={ratingOrder === "TWO_STARS"}
                        onClick={() => { filterDispatch({ type: "RATING_ORDER", payload: "TWO_STARS" }); } } />
                    <label htmlFor="2-stars">2 stars</label>
                </li>
                <li className="filter-item flex">
                    <input type="radio" name="rating-radio" id="1-stars" value={"ONE_STAR"} checked={ratingOrder === "ONE_STAR"}
                        onClick={() => { filterDispatch({ type: "RATING_ORDER", payload: "ONE_STAR" }); } } />
                    <label htmlFor="1-stars">1 Stars</label>
                </li>
            </ul>
        </div>
        <div className="sort-section">
            <div className="title">Sort By</div>
            <ul className="list-none">
                <li className="filter-item flex">
                    <input type="radio" name="sort-radio" id="high-to-low" value={"HIGH_TO_LOW"} checked={priceOrder === "HIGH_TO_LOW"}
                        onClick={() => { filterDispatch({ type: "SORT_LIST", payload: "HIGH_TO_LOW" }); } } />
                    <label htmlFor="high-to-low">Price - High to Low</label>
                </li>
                <li className="filter-item flex">
                    <input type="radio" name="sort-radio" id="low-to-high" value={"LOW_TO_HIGH"} checked={priceOrder === "LOW_TO_HIGH"}
                        onClick={() => { filterDispatch({ type: "SORT_LIST", payload: "LOW_TO_HIGH" }); } } />
                    <label htmlFor="low-to-high">Price - Low to High</label>
                </li>
            </ul>
        </div>
    </aside>;
}

export {Filter}