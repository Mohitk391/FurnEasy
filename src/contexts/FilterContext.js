import { FilterReducer } from "../reducers/FilterReducer";

const { createContext, useContext, useReducer } = require("react");

const initialState = {
    sortOrder : null,
    ratingOrder: null,
    categories: [],
    selectedFilters: {categories: [], ratingOrder: "", priceOrder: ""}
}

const FilterContext = createContext();

const FilterProvider = ({children}) => {
    const [filterState, filterDispatch ] = useReducer(FilterReducer, initialState)
    return (
    <FilterContext.Provider value={{filterState, filterDispatch}}>
        {children}
        </FilterContext.Provider>)
}

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider }